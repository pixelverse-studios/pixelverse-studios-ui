import { Button } from '@mui/material'

import CircleLoader from '../../loader/circle'
import styles from './Button.module.scss'

const FormSubmitButton = ({
    loading,
    disabled,
    label
}: {
    loading: boolean
    disabled: boolean
    label: string
}) => {
    return (
        <Button
            className={styles.FormSubmitButton}
            type="submit"
            variant="contained"
            disabled={disabled}>
            {loading ? <CircleLoader /> : label}
        </Button>
    )
}

export default FormSubmitButton
