import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FormProps } from '../../../utilities/types/formTypes'
import useForm from '../../../utilities/hooks/useForm'
import styles from './AuthPages.module.scss'
import { VALID_EMAIL } from '../../../utilities/regex'
import { StringField, FormRow } from '../../form'

const INITIAL_STATE = {
    email: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: {
        test: (value: string) => VALID_EMAIL.test(value),
        message: 'Must containt a valid email address (example@test.com)'
    }
}
const ForgotPassword = () => {
    const router = useRouter()
    const { form, handleChange } = useForm(INITIAL_STATE, VALIDATIONS)
    const { email } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(true)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        router.push('/login')
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
                <h1 className={styles.header}>Forgot Password</h1>

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
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
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
