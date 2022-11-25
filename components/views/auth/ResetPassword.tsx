import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import useForm from '../../../utilities/hooks/useForm'
import { FormProps } from '../../../utilities/types/formTypes'
import {
    showTechnicalDifficultiesBanner,
    showBanner
} from '../../../lib/redux/slices/banner'
import { FormRow, PasswordField, SubmitButton } from '../../form'
import FormValidations from '../../../utilities/validations/forms'
import styles from './AuthPages.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../lib/redux/store'
import CircleLoader from '../../loader/circle'
import { setLoading, setProfile } from '../../../lib/redux/slices/user'
import { JWT_SECRET } from '../../../utilities/constants'
import { RESET_PASSWORD } from '../../../lib/gql/mutations/users'
const INITIAL_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    newPassword: FormValidations.validPassword,
    confirmPassword: FormValidations.validConfirmedPassword
}

const ResetPassword = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const user = useSelector((state: any) => state.user)
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

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
                        <FormRow>
                            <PasswordField
                                id="newPassword"
                                name="newPassword"
                                placeholder="New Password"
                                field={newPassword}
                                onChange={handleChange}
                                minLength={8}
                                title="Custom"
                                showMessage={false}
                            />
                        </FormRow>
                        <FormRow>
                            <PasswordField
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                field={confirmPassword}
                                onChange={handleChange}
                                minLength={8}
                                title="Custom"
                                showMessage
                                confirmationField={newPassword}
                            />
                        </FormRow>
                        <SubmitButton
                            label="Submit"
                            disabled={!isFormValid}
                            loading={false}
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
