import { useState, FormEvent, useEffect } from 'react'
import useForm from '../../../utilities/hooks/useForm'
import Link from 'next/link'
import { FormProps } from '../../../utilities/types/formTypes'
import {
    VALID_STRING,
    VALID_EMAIL,
    VALID_PASSWORD
} from '../../../utilities/validations/regexValidators'
import { StringField, FormRow, PasswordField } from '../../form'
import styles from './AuthPages.module.scss'

const INITIAL_STATE = {
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' }
} as FormProps

const NAME_ERROR_MESSAGE = 'Field can only contain alphabetic characters'
const VALIDATIONS = {
    firstName: {
        test: (value: string) => VALID_STRING.test(value),
        message: NAME_ERROR_MESSAGE
    },
    lastName: {
        test: (value: string) => VALID_STRING.test(value),
        message: NAME_ERROR_MESSAGE
    },
    email: {
        test: (value: string) => VALID_EMAIL.test(value),
        message: 'Must containt a valid email address (example@test.com)'
    },
    password: {
        test: (value: string) => VALID_PASSWORD.test(value),
        message: 'Password does not meet requirements'
    }
}

const Register = () => {
    const { form, handleChange } = useForm(INITIAL_STATE, VALIDATIONS)
    const { firstName, lastName, email, password } = form
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
                <h1 className={styles.header}>Register</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <FormRow>
                            <StringField
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                field={firstName}
                                onChange={handleChange}
                                required
                            />
                            <StringField
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                field={lastName}
                                onChange={handleChange}
                                required
                            />
                        </FormRow>
                        <FormRow>
                            <StringField
                                field={email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                        </FormRow>
                        <FormRow>
                            <PasswordField
                                id="password"
                                name="password"
                                placeholder="Password"
                                field={password}
                                onChange={handleChange}
                                minLength={8}
                                title="Custom"
                                showMessage={true}
                            />
                        </FormRow>
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                        <div className={styles.option}>
                            Already a user?
                            <Link href="/login">
                                <a className={styles.signIn}> Sign In</a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register
