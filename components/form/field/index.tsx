import { ChangeEventHandler } from 'react'
import { inputType } from '../../../utilities/types/formTypes'
import styles from './FormField.module.scss'

type FormFieldProps = {
    field: inputType
    type: string
    id: string
    name: string
    placeholder: string
    onChange: ChangeEventHandler
    required?: boolean
    minLength?: number
    title?: string
}

const FormField = ({
    field,
    type,
    id,
    name,
    placeholder,
    onChange,
    required,
    title,
    minLength
}: FormFieldProps) => {
    return (
        <div className={styles.FormField}>
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
            <label htmlFor={id}>{placeholder}</label>
            {field?.error ? (
                <div className={styles.errorPopUp}>
                    <span className={styles.popUpText}>{field.error}</span>
                </div>
            ) : null}
        </div>
    )
}

export default FormField
