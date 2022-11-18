import { ChangeEventHandler, useState } from 'react'
import { inputType } from '../../../../utilities/types/formTypes'
import styles from './PasswordField.module.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type PasswordFieldProps = {
    field: inputType
    id: string
    name: string
    placeholder: string
    onChange: ChangeEventHandler
    minLength: number
    title?: string
    message?: boolean
    confirmationField?: inputType
}

const PasswordField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    minLength,
    title,
    message,
    confirmationField
}: PasswordFieldProps) => {
    const [type, setType] = useState('password')
    const toggleView = () => {
        if (type === 'password') setType('text')

        if (type === 'text') setType('password')
    }

    const renderError = () => {
        if (name === 'confirmPassword') {
            const displayError = confirmationField?.value !== field.value
            return (
                <>
                    {displayError && field.value ? (
                        <div className={styles.errorPopUp}>
                            <span className={styles.popUpText}>
                                {field.error}
                            </span>
                        </div>
                    ) : null}
                </>
            )
        }
        return (
            <>
                {field?.error ? (
                    <div className={styles.errorPopUp}>
                        <span className={styles.popUpText}>{field.error}</span>
                    </div>
                ) : null}
            </>
        )
    }
    return (
        <div className={styles.FormField}>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={field?.value}
                onChange={onChange}
                required
                minLength={minLength}
                title={title}
            />
            {renderError()}
            <label
                className={field?.error ? styles.errorLabel : ''}
                htmlFor={id}>
                {placeholder}
            </label>
            {message && (
                <div className={styles.small}>
                    <small>
                        *Minimum 8 characters. Must be alphanumeric and minimum
                        1 symbol/special character
                    </small>
                </div>
            )}

            {type === 'password' ? (
                <FaEye className={styles.icon} onClick={toggleView} />
            ) : (
                <FaEyeSlash className={styles.icon} onClick={toggleView} />
            )}
        </div>
    )
}

export default PasswordField
