import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../lib/redux/slices/banner'
import { AppDispatch } from '../../../lib/redux/store'
import { SEND_PASSWORD_RESET } from '../../../lib/gql/mutations/users'
import { FormProps } from '../../../utilities/types/formTypes'
import useForm from '../../../utilities/hooks/useForm'
import FormValidations from '../../../utilities/validations/forms'
import { FormSubmitButton, TextField, FormRow } from '../../form'

import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    email: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: FormValidations.validEmail
}

const ForgotPassword = () => {
    const dispatch = useDispatch<AppDispatch>()

    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email } = form
    const [loading, setLoading] = useState<boolean>(false)

    const [sendResetPasswordEmail] = useMutation(SEND_PASSWORD_RESET, {
        onCompleted({ sendPasswordResetEmail: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(
                    showBanner({
                        message:
                            'An email was sent out to you with instructions.',
                        type: data.__typename
                    })
                )
                handleReset()
            }

            setLoading(false)
        },
        onError(err: any) {
            setLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            email: email.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        sendResetPasswordEmail()
    }

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <FormRow>
                            <TextField
                                type="email"
                                id="email"
                                name="email"
                                label="Enter email"
                                field={email}
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormSubmitButton
                            disabled={!isFormValid}
                            label="Submit"
                            loading={loading}
                        />
                        <div className={styles.option}>
                            <Link href="/login">
                                <a className={styles.forgotPw}>
                                    Remember Password ?
                                </a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
