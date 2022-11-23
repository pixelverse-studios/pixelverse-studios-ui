import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.cssloadtriangles}>
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
            <div className={`${styles.cssloadtri}`} />
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
            <div className={`${styles.cssloadtri}`} />
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
            <div className={`${styles.cssloadtri}`} />
            <div className={`${styles.cssloadtri} ${styles.cssloadinvert}`} />
        </div>
    )
}

export default Loader
