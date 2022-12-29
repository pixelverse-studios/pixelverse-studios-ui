import { useState } from 'react'
import {
    FormControl,
    FormHelperText,
    TextField as MuiTextField,
    InputAdornment,
    IconButton
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { setColor } from './utilities'
import { stringInputType } from '../../../utilities/types/formTypes'

type StringFieldProps = {
    field: stringInputType
    type: 'text' | 'email' | 'password' | 'number' | 'textarea'
    id: string
    name: string
    label: string
    onChange: any
    // required?: boolean
    disabled?: boolean
}

const TextField = ({
    field,
    type,
    id,
    name,
    label,
    onChange,
    disabled
}: StringFieldProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    if (type === 'password') {
        return (
            <FormControl
                color={setColor(field)}
                error={field.error ? true : false}>
                <MuiTextField
                    color={setColor(field)}
                    error={field.error ? true : false}
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                    aria-describedby={id}
                    label={label}
                    title={label}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <FormHelperText id={id}>{field.error}</FormHelperText>
            </FormControl>
        )
    }

    return (
        <FormControl color={setColor(field)} error={field.error ? true : false}>
            <MuiTextField
                multiline={type === 'textarea'}
                color={setColor(field)}
                error={field.error ? true : false}
                variant="outlined"
                type={type === 'textarea' ? 'text' : type}
                id={id}
                name={name}
                onChange={onChange}
                disabled={disabled}
                aria-describedby={id}
                label={label}
                title={label}
            />
            <FormHelperText id={id}>{field.error}</FormHelperText>
        </FormControl>
    )
}

export default TextField
