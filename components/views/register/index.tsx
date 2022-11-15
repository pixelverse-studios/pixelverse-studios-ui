import { useState, FormEvent, useRef, useEffect } from 'react'
import useForm from '../../../utilities/hooks/useForm'
import Link from 'next/link'
import styles from './Register.module.scss'
import { FormProps, ErrorProps } from '../../../utilities/types/formTypes'
import {
    VALID_FIRST_NAME,
    VALID_LAST_NAME,
    VALID_EMAIL,
    VALID_PASSWORD
} from '../../../utilities/validations/regexValidators'
import { errorMessage } from '../../../utilities/errorMessage'

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
} as FormProps

const INITIAL_ERROR = {
    hasError: false,
    fieldName: ''
} as ErrorProps

const validation = {
    firstName: (value: string) => {
        const result = VALID_FIRST_NAME.test(value)
        return result
    },
    lastName: (value: string) => {
        const result = VALID_LAST_NAME.test(value)
        return result
    },
    email: (value: string) => {
        const result = VALID_EMAIL.test(value)
        return result
    },
    password: (value: string) => {
        const result = VALID_PASSWORD.test(value)
        return result
    }
}

const Register = () => {
    const { nameError, emailError, passwordError } = errorMessage
    const {
        form: { firstName, lastName, email, password },
        error: { hasError, fieldName },
        handleChange
    } = useForm(INITIAL_STATE, validation, INITIAL_ERROR)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

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
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className={styles.formLabel}>
                                    First Name
                                </label>
                                {hasError && fieldName === 'firstName' && (
                                    <div className={styles.errorPopUp}>
                                        <span className={styles.popUpText}>
                                            {nameError}
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
                                    value={lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <label
                                    className={styles.formLabel}
                                    htmlFor="lastName">
                                    Last Name
                                </label>
                                {hasError && fieldName === 'lastName' && (
                                    <div className={styles.errorPopUp}>
                                        <span className={styles.popUpText}>
                                            {nameError}
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
                                value={email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className={styles.formLabel}>
                                Email
                            </label>
                            {hasError && fieldName === 'email' && (
                                <div className={styles.errorPopUp}>
                                    <span className={styles.popUpText}>
                                        {emailError}
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
                                value={password}
                                onChange={handleChange}
                                minLength={8}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"
                                title="Custom"
                                required
                            />
                            <label
                                htmlFor="password"
                                className={styles.formLabel}>
                                Password
                            </label>
                            {hasError && fieldName === 'password' && (
                                <div className={styles.errorPopUp}>
                                    <span className={styles.popUpText}>
                                        {passwordError}
                                    </span>
                                </div>
                            )}
                        </div>
                        <small>
                            *Minimum 8 characters. Must be alphanumeric and
                            minimum 1 symbol/special character
                        </small>

                        <button className={styles.button} type="submit">
                            Submit
                        </button>
                        <div className={styles.login}>
                            Already a user?
                            <Link href="/login">
                                <a className={styles.forgotPw}>Sign In</a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register
