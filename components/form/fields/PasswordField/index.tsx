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
}

const PasswordField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    minLength,
    title
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
            <label
                className={field?.error ? styles.errorLabel : ''}
                htmlFor={id}>
                {placeholder}
            </label>
            {type === 'password' ? (
                <FaEye className={styles.icon} onClick={toggleView} />
            ) : (
                <FaEyeSlash className={styles.icon} onClick={toggleView} />
            )}

            {field?.error ? (
                <div className={styles.errorPopUp}>
                    <span className={styles.popUpText}>{field.error}</span>
                </div>
            ) : null}
        </div>
    )
}

export default PasswordField
