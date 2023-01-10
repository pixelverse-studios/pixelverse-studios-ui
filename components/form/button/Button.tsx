import { Button as MuiButton } from '@mui/material'

import CircleLoader from '../../loader/circle'
import styles from './Button.module.scss'

const Button = ({
    loading,
    disabled,
    label,
    style,
    onClick
}: {
    loading: boolean
    disabled: boolean
    label: string
    style: 'submit' | 'cancel' | 'general'
    onClick: any
}) => {
    return (
        <MuiButton
            onClick={onClick}
            className={`${styles.Button} ${styles[style]}`}
            type="submit"
            variant="outlined"
            disabled={disabled}>
            {loading ? <CircleLoader /> : label}
        </MuiButton>
    )
}

export default Button
