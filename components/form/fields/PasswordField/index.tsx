import { useState } from 'react'
import { stringInputType } from '../../../../utilities/types/formTypes'
import styles from './PasswordField.module.scss'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type PasswordFieldProps = {
    field: stringInputType
    id: string
    name: string
    placeholder: string
    onChange: any
    minLength: number
    title?: string
    showMessage?: boolean
    message?: string
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
    message
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
                <Visibility className={styles.icon} onClick={toggleView} />
            ) : (
                <VisibilityOff className={styles.icon} onClick={toggleView} />
            )}
        </div>
    )
}

export default PasswordField
