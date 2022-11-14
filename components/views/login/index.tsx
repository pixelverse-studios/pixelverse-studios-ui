import { useState, FormEvent } from 'react'
import Link from 'next/link'

import { FormProps } from '../../../utilities/types/formTypes'
import styles from './Login.module.scss'
import useForm from '../../../utilities/hooks/useForm'
import { fromPromise } from '@apollo/client'

const INITIAL_STATE = {
    email: '',
    password: ''
} as FormProps

const INITIAL_ERROR = {
    message: 'Enter message',
    hasError: false
} as { message: string; hasError: boolean }

const Login = () => {
    const {
        form: { email, password },
        handleChange
    } = useForm(INITIAL_STATE)
    const [error, setError] = useState(INITIAL_ERROR)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                {error?.hasError && (
                    <div className={styles.errorMessage}>{error.message}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.formInputs}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={handleChange}
                            required
                        />

                        <button className={styles.button} type="submit">
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
