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
    required?: boolean
    minLength?: number
    title?: string
}

const PasswordField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    required,
    minLength,
    title
}: PasswordFieldProps) => {
    const [type, setType] = useState('password')
    const toggleView = () => {
        console.log(type)
        if (type === 'password') setType('text')

        if (type === 'text') setType('password')
    }
    return (
        <div className={styles.PasswordField}>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={field?.value}
                onChange={onChange}
                required={required}
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
