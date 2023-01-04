import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { TextField } from '@mui/material'

import { stringInputType } from '../../../utilities/types/formTypes'

interface props {
    field: stringInputType
    id: string
    name: string
    label: string
    onChange: any
    disabled?: boolean
    minDate?: Date
}

const DateField = ({ field, label, onChange, name, id, minDate }: props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
                label={label}
                value={field.value}
                minDate={minDate}
                onChange={newValue => {
                    onChange(newValue)
                }}
                renderInput={(params: any) => (
                    <TextField
                        id={id}
                        name={name}
                        {...params}
                        helperText={!!field.error ? field.error : null}
                    />
                )}
            />
        </LocalizationProvider>
    )
}

export default DateField
