import { ChangeEventHandler, useState } from 'react'
import { stringInputType } from '../../../../utilities/types/formTypes'
import styles from './PasswordField.module.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { SassMap } from 'sass'

type PasswordFieldProps = {
    field: stringInputType
    id: string
    name: string
    placeholder: string
    onChange: ChangeEventHandler
    minLength: number
    title?: string
    showMessage?: boolean
    message?: string
    confirmationField?: stringInputType
}

const PasswordField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    minLength,
    title,
    showMessage,
    message,
    confirmationField
}: PasswordFieldProps) => {
    const [type, setType] = useState('password')
    const toggleView = () => {
        if (type === 'password') setType('text')

        if (type === 'text') setType('password')
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
            {field?.error ? (
                <div className={styles.errorPopUp}>
                    <span className={styles.popUpText}>{field.error}</span>
                </div>
            ) : null}
            <label
                className={field?.error ? styles.errorLabel : ''}
                htmlFor={id}>
                {placeholder}
            </label>
            {showMessage && (
                <div className={styles.small}>
                    {!message ? (
                        <small>
                            *Minimum 8 characters. Must be alphanumeric and
                            minimum 1 symbol/special character
                        </small>
                    ) : (
                        <small>{message}</small>
                    )}
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
