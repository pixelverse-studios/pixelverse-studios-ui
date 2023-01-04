import CircleLoader from '../../loader/circle'
import styles from './Button.module.scss'

const SubmitButton = ({
    loading,
    disabled,
    label
}: {
    loading: boolean
    disabled: boolean
    label: string
}) => {
    return (
        <button
            className={styles.SuccessButton}
            type="submit"
            disabled={disabled}>
            {loading ? <CircleLoader /> : label}
        </button>
    )
}

export default SubmitButton
