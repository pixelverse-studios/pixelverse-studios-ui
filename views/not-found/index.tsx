import { useRouter } from 'next/router'
import styles from './NotFound.module.scss'

const PageNotFound = () => {
    const router = useRouter()

    const onGoHome = () => router.push('/')

    return (
        <section className={styles.notFoundContainer}>
            <div className={styles['error-container']}>
                <span className={styles.four}>
                    <span className={styles['screen-reader-text']}>4</span>
                </span>
                <span className={styles.zero}>
                    <span className={styles['screen-reader-text']}>0</span>
                </span>
                <span className={styles.four}>
                    <span className={styles['screen-reader-text']}>4</span>
                </span>
            </div>
            <div className={styles.lostMessage}>
                Looks like the page you were trying to get to doesn't exist.
            </div>
            <button onClick={onGoHome}>GO HOME</button>
        </section>
    )
}

export default PageNotFound
