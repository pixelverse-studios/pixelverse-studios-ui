import { stringInputType } from '../../../utilities/types/formTypes'
import styles from './FormField.module.scss'

type StringFieldProps = {
    field: stringInputType
    id: string
    name: string
    placeholder: string
    onChange: any
    required?: boolean
    minLength?: number
    title?: string
    theme: 'light' | 'dark'
    disabled?: boolean
}

const StringField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    required,
    title,
    minLength,
    theme
}: StringFieldProps) => {
    return (
        <div
            className={`${styles.FormField} ${
                theme === 'dark' ? styles.dark : styles.light
            }`}>
            <input
                type="number"
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
            {field?.error ? (
                <div className={styles.errorPopUp}>
                    <span className={styles.popUpText}>{field.error}</span>
                </div>
            ) : null}
        </div>
    )
}

export default StringField
