import { useState, FormEvent, useEffect } from 'react'

import useForm from '../../../utilities/hooks/useForm'
import { FormProps } from '../../../utilities/types/formTypes'
import { FormRow, PasswordField, SubmitButton } from '../../form'
import FormValidations from '../../../utilities/validations/forms'
import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    newPassword: { value: '', error: '' },
    confirmPassword: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    newPassword: FormValidations.validPassword,
    confirmPassword: FormValidations.validConfirmedPassword
}

const ResetPassword = () => {
    const { form, handleChange, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { newPassword, confirmPassword } = form

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

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
