import { useState, FormEvent, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'

import { setLoading, setProfile } from '../../../lib/redux/slices/user'
import { showBanner } from '../../../lib/redux/slices/banner'
import { AppDispatch } from '../../../lib/redux/store'
import { LOGIN } from '../../../lib/gql/mutations/users'
import { JWT_SECRET } from '../../../utilities/constants'
import { FormProps } from '../../../utilities/types/formTypes'
import styles from './AuthPages.module.scss'
import useForm from '../../../utilities/hooks/useForm'
import FormValidations from '../../../utilities/validations/forms'
import { StringField, FormRow, PasswordField } from '../../form'

const INITIAL_STATE = {
    email: { value: '', error: '' },
    password: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    email: FormValidations.validEmail,
    password: FormValidations.validPassword
}

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()

    const user = useSelector((state: any) => state.user)
    const { form, handleChange, handleReset } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const { email, password } = form
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true)

    const [login] = useMutation(LOGIN, {
        onCompleted({ login: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                const profile = { ...data }
                const token = data.token
                localStorage.setItem(JWT_SECRET, token)

                delete profile.__typename
                delete profile.successType
                delete profile.token
                dispatch(setProfile(profile))
                dispatch(
                    showBanner({
                        message: 'User logged in successfully',
                        type: data.__typename
                    })
                )

                handleReset()
            }
            dispatch(setLoading(false))
            router.push('/dashboard')
        },
        onError(err: any) {
            dispatch(setLoading(false))
            dispatch(
                showBanner({
                    type: 'Errors',
                    message:
                        'We are experiencing technical difficulties. Please try again, or reach out for assistance at info@ezpzcoding.com'
                })
            )
        },
        variables: {
            email: email.value,
            password: password.value
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(setLoading(true))
        login()
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

    const onBanner = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(
            showBanner({
                message: 'User logged in successfully',
                type: 'UserSuccess'
            })
        )
    }

    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset disabled={user?.loading}>
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
                        <FormRow>
                            <PasswordField
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                field={password}
                                onChange={handleChange}
                                minLength={8}
                            />
                        </FormRow>
                        <button
                            className={styles.button}
                            type="submit"
                            disabled={disableSubmit}>
                            Submit
                        </button>
                        <button onClick={onBanner}>BANNER</button>
                        <div className={styles.option}>
                            <Link href="/password/forgot">
                                <a className={styles.forgotPw}>
                                    Forgot Password ?
                                </a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login
