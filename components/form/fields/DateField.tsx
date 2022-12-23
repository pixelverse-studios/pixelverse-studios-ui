import { format, isAfter } from 'date-fns'
import DatePicker from 'react-datepicker'
import { BiCalendarAlt } from 'react-icons/bi'

import { stringInputType } from '../../../utilities/types/formTypes'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './FormField.module.scss'

interface props {
    field: stringInputType
    id: string
    name: string
    placeholder: string
    onChange: any
    theme: 'light' | 'dark'
    disabled?: boolean
    minimumDate?: Date
    displayFormat: string
}

const DateField = ({
    field,
    id,
    name,
    placeholder,
    onChange,
    theme,
    minimumDate,
    disabled,
    displayFormat
}: props) => {
    const onDateChange = (date: Date) =>
        onChange({ value: format(date, displayFormat), name })

    return (
        <div
            className={`${styles.FormField} ${
                theme === 'dark' ? styles.dark : styles.light
            }`}>
            <DatePicker
                minDate={minimumDate}
                disabled={disabled}
                onChange={onDateChange}
                customInput={
                    <div
                        className={`${styles.DateDisplay} ${
                            disabled ? styles.disabled : ''
                        }`}>
                        <BiCalendarAlt />
                        {field?.value ?? 'Select Date'}
                    </div>
                }
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

export default DateField
