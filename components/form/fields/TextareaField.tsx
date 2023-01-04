import { stringInputType } from '../../../utilities/types/formTypes'
import styles from './FormField.module.scss'

type TextareaFieldProps = {
    field: stringInputType
    id: string
    name: string
    placeholder: string
    onChange: any
    required?: boolean
    title?: string
    theme: 'light' | 'dark'
    disabled?: boolean
}

const TextareaField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    required,
    title,
    theme
}: TextareaFieldProps) => {
    const onInputChange = (event: any) => {
        const { value, name } = event.target
        onChange({ value, name })
    }

    return (
        <div
            className={`${styles.FormField} ${
                theme === 'dark' ? styles.dark : styles.light
            }`}>
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={field?.value}
                onChange={onInputChange}
                required={required}
                title={title}
                rows={4}
                cols={150}
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

export default TextareaField
