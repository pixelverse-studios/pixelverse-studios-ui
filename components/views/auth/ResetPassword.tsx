import { useState, FormEvent, useEffect } from 'react'
import useForm from '../../../utilities/hooks/useForm'
import { FormProps } from '../../../utilities/types/formTypes'
import { VALID_PASSWORD } from '../../../utilities/validations/regexValidators'
import { FormRow, PasswordField } from '../../form'
import { BiErrorAlt } from 'react-icons/bi'

import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

const PASSWORD_ERROR_MESSAGE = 'Password does not meet requirements'
const VALIDATIONS = {
    newPassword: {
        test: (value: string) => VALID_PASSWORD.test(value),
        message: PASSWORD_ERROR_MESSAGE
    },
    confirmPassword: {
        test: (value: string) => VALID_PASSWORD.test(value),
        message: PASSWORD_ERROR_MESSAGE
    }
}

const INITIAL_ERROR = {
    message: '',
    hasError: false
} as { message: string; hasError: boolean }

const ResetPassword = () => {
    const { form, handleChange } = useForm(INITIAL_STATE, VALIDATIONS)
    const { newPassword, confirmPassword } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [submitError, setSubmitError] = useState<boolean>(false)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (
            confirmPassword.value !== '' &&
            newPassword.value !== confirmPassword.value
        ) {
            setSubmitError(true)
        } else {
            setSubmitError(false)
        }
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
    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    {submitError && (
                        <div className={styles.errorField}>
                            <BiErrorAlt className={styles.errorIcon} />
                            The passwords do not match
                        </div>
                    )}

                    <fieldset>
                        <FormRow>
                            <PasswordField
                                id="newPassword"
                                name="newPassword"
                                placeholder="New Password"
                                field={newPassword}
                                onChange={handleChange}
                                minLength={8}
                                title="Custom"
                                message={false}
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
                                message={true}
                            />
                        </FormRow>
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
