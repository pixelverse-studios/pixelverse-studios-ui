import { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

const CancelButton = ({
    label,
    onCancel
}: {
    label: string
    onCancel: MouseEventHandler
}) => {
    return (
        <button className={styles.CancelButton} onClick={onCancel}>
            {label}
        </button>
    )
}

export default CancelButton
