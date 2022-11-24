import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'

import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../lib/redux/slices/banner'
import { FormProps } from '../../../utilities/types/formTypes'
import useForm from '../../../utilities/hooks/useForm'
import FormValidations from '../../../utilities/validations/forms'
import { StringField, FormRow } from '../../form'
import SubmitButton from '../../form/button/SubmitButton'
import styles from './AuthPages.module.scss'

const ERROR = 'error'
const SUCCESS = 'success'

const INITIAL_STATE = {
    email: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: FormValidations.validEmail
}

const ForgotPassword = () => {
    const { form, handleChange, handleReset } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [alert, setAlert] = useState<{ type: string; email: string }>({
        type: '',
        email: ''
    })
    const [showBanner, setShowBanner] = useState<boolean>(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAlert({
            type: SUCCESS,
            email: email.value
        })
        setShowBanner(true)
        handleReset()
    }

    useEffect(() => {
        let isFormValid = true
        Object.keys(form).forEach(item => {
            const current = form[item]
            if ((isFormValid && !current.value) || current.error) {
                isFormValid = false
            }
        })
        setDisableSubmit(!isFormValid)
    })

    const BannerDisplay = () => {
        const { type, email } = alert

        if (type === SUCCESS)
            return (
                <div className={styles.success}>
                    An email has been sent to {email} with a link to reset your
                    password.
                </div>
            )
        if (type === ERROR)
            return (
                <div className={styles.error}> {email} has not been found </div>
            )

        return <div />
    }

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Forgot Password</h1>
                {showBanner && <BannerDisplay />}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <FormRow>
                            <StringField
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                field={email}
                                onChange={handleChange}
                                required
                            />
                        </FormRow>
                        <SubmitButton
                            disabled={disableSubmit}
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
