import { useState, FormEvent } from 'react'
import styles from './Login.module.scss'
import useForm from '../../../utilities/hooks/useForm'

const Login = () => {
    const { input, handleChange, handleReset, clearForm } = useForm({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        message: 'Enter message',
        hasError: false
    })

    const { email, password } = input
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(input)

        /*
if(noerror){
  clear form and route to dash
} else {
setError message
    }
 */
    }
    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                {error.hasError && (
                    <div className={styles.errorMessage}>{error.message}</div>
                )}

                <form onSubmit={handleSubmit}>
                    <fieldset className={styles.formInputs}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                        <button className={styles.button} type="submit">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login
