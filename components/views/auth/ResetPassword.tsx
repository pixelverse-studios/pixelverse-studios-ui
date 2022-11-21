import { useState, FormEvent, useEffect } from 'react'

import useForm from '../../../utilities/hooks/useForm'
import { FormProps } from '../../../utilities/types/formTypes'
import { VALID_PASSWORD } from '../../../utilities/validations/regexValidators'
import { FormRow, PasswordField } from '../../form'
import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    newPassword: {
        test: (value: string) => VALID_PASSWORD.test(value),
        message:
            'Password is required, and should include at least 1 lowercase & uppercase letter, 1 special character, 1 number, and be minimum 8 characters long.'
    },
    confirmPassword: {
        test: (value: string) => false,
        message: 'Passwords do not match'
    }
}

const ResetPassword = () => {
    const { form, handleChange } = useForm(INITIAL_STATE, VALIDATIONS)
    const { newPassword, confirmPassword } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
                                confirmationField={newPassword}
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