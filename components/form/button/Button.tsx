import { Button as MuiButton } from '@mui/material'

import CircleLoader from '../../loader/circle'
import styles from './Button.module.scss'

const Button = ({
    loading,
    disabled,
    label,
    onClick,
    color
}: {
    loading: boolean
    disabled: boolean
    label: string
    color: 'primary' | 'secondary'
    onClick: any
}) => {
    return (
        <MuiButton
            onClick={onClick}
            color={color}
            type="submit"
            variant="outlined"
            disabled={disabled}>
            {loading ? <CircleLoader /> : label}
        </MuiButton>
    )
}

export default Button
