import { useState, FormEvent, useRef, useEffect } from 'react'
import useForm from '../../../utilities/hooks/useForm'
import Link from 'next/link'
import styles from './Register.module.scss'
import { FormProps } from '../../../utilities/types/formTypes'
import {
    VALID_STRING,
    VALID_EMAIL,
    VALID_PASSWORD
} from '../../../utilities/validations/regexValidators'

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
                    <fieldset className={styles.formInputs}>
                        <div className={styles.nameInputs}>
                            <div className={styles.inputField}>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={firstName?.value}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className={styles.formLabel}>
                                    First Name
                                </label>
                                {firstName?.error && (
                                    <div className={styles.errorPopUp}>
                                        <span className={styles.popUpText}>
                                            {firstName.error}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className={styles.inputField}>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={lastName?.value}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    className={styles.formLabel}
                                    htmlFor="lastName">
                                    Last Name
                                </label>
                                {lastName?.error && (
                                    <div className={styles.errorPopUp}>
                                        <span className={styles.popUpText}>
                                            {lastName.error}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.inputField}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={email?.value}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            {email?.error && (
                                <div className={styles.errorPopUp}>
                                    <span className={styles.popUpText}>
                                        {email.error}
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className={styles.inputField}>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password?.value}
                                onChange={handleChange}
                                minLength={8}
                                title="Custom"
                                required
                            />
                            <label
                                htmlFor="password"
                                className={styles.formLabel}>
                                Password
                            </label>
                            {password?.error && (
                                <div className={styles.errorPopUp}>
                                    <span className={styles.popUpText}>
                                        {password.error}
                                    </span>
                                </div>
                            )}
                        </div>
                        <small>
                            *Minimum 8 characters. Must be alphanumeric and
                            minimum 1 symbol/special character
                        </small>

                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                        <div className={styles.login}>
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
