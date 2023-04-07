import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../lib/redux/store'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import useForm from '../../utilities/hooks/useForm'
import { FormProps } from '../../utilities/types/formTypes'
import {
    showTechnicalDifficultiesBanner,
    showBanner,
    hideBanner
} from '../../lib/redux/slices/banner'
import { FormRow, TextField, FormSubmitButton } from '../../components/form'
import FormValidations from '../../utilities/validations/forms'
import { setLoading, setProfile } from '../../lib/redux/slices/user'
import { JWT_SECRET } from '../../utilities/constants'
import { RESET_PASSWORD } from '../../lib/gql/mutations/users'
import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    newPassword: FormValidations.validPassword,
    confirmPassword: FormValidations.validPassword
}

const ResetPassword = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const user = useSelector((state: any) => state.user)
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const { form, handleChange, isFormValid, handleReset } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { newPassword, confirmPassword } = form

    const [resetPassword] = useMutation(RESET_PASSWORD, {
        onCompleted({ register: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const profile = { ...data }
                const token = data.token
                localStorage.setItem(JWT_SECRET, token)

                delete profile.__typename
                delete profile.successType
                delete profile.token
                dispatch(setProfile(profile))

                dispatch(
                    showBanner({
                        message: 'Your password has sucessfully been changed.',
                        type: data.__typename
                    })
                )
                handleReset()
            }
            dispatch(setLoading(false))
            router.push('/')
        },
        onError(err: any) {
            dispatch(setLoading(false))
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            newPassword: newPassword.value,
            confirmPassword: confirmPassword.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setLoading(true))
        resetPassword()
    }

    useEffect(() => {
        if (newPassword.value && confirmPassword.value) {
            const passwordsMatch = newPassword.value === confirmPassword.value
            const isValid = passwordsMatch && isFormValid

            dispatch(
                isValid
                    ? hideBanner()
                    : showBanner({
                          message: 'Passwords do not match',
                          type: 'Errors',
                          duration: 'permanant'
                      })
            )
            setDisableSubmit(!isValid)
        }
    })

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
                        <FormRow>
                            <TextField
                                id="newPassword"
                                name="newPassword"
                                label="New Password"
                                field={newPassword}
                                onChange={handleChange}
                                type="password"
                            />
                        </FormRow>
                        <FormRow>
                            <TextField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                field={confirmPassword}
                                onChange={handleChange}
                                type="password"
                            />
                        </FormRow>
                        <FormSubmitButton
                            label="Submit"
                            disabled={disableSubmit}
                            loading={user.loading}
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
