import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'

import { FormProps } from '../../../utilities/types/formTypes'
import styles from './Login.module.scss'
import useForm from '../../../utilities/hooks/useForm'

import { VALID_EMAIL, VALID_PASSWORD } from '../../../utilities/regex'

const INITIAL_STATE = {
    email: { value: '', error: '' },
    password: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: {
        test: (value: string) => VALID_EMAIL.test(value),
        message: 'Must containt a valid email address (example@test.com)'
    },
    password: {
        test: (value: string) => VALID_PASSWORD.test(value),
        message: 'Password does not meet requirements'
    }
}

const Login = () => {
    const { form, handleChange } = useForm(INITIAL_STATE, VALIDATIONS)
    const { email, password } = form
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
                <h1 className={styles.header}>Login</h1>

                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.formInputs}>
                        <div className={styles.inputField}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={email.value}
                                onChange={handleChange}
                                required
                            />
                            <label className={styles.formLabel} htmlFor="email">
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
                                placeholder="Enter password"
                                value={password.value}
                                onChange={handleChange}
                                required
                            />
                            <label
                                className={styles.formLabel}
                                htmlFor="password">
                                Password
                            </label>
                        </div>

                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                        <Link href="/forgotpassword">
                            <a className={styles.forgotPw}>Forgot Password ?</a>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login
