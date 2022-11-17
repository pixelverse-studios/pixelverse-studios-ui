import styles from './FormRow.module.scss'

const FormRow = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return <div className={styles.FormRow}>{children}</div>
}

export default FormRow
