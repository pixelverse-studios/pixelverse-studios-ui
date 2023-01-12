import { Handshake, ModeStandby, WatchLater } from '@mui/icons-material'
import styles from './Landing.module.scss'

const WhyUs = () => {
    return (
        <div className={styles.whyUsBlock}>
            <h2>Why use us?</h2>
            <div className={styles.reasonsList}>
                <div className={styles.reason}>
                    <WatchLater />
                    <span className={styles.primary}>Efficient</span>
                    <span className={styles.secondary}>
                        Your timeline is our schedule. We work fast and
                        efficiently to meet the goals you set. We win when you
                        win.
                    </span>
                </div>
                <div className={styles.reason}>
                    <ModeStandby />
                    <span className={styles.primary}>Accurate</span>
                    <span className={styles.secondary}>
                        Attention to detail is key. You can trust us to provide
                        an excellent, finished product every time. We don't
                        miss.
                    </span>
                </div>
                <div className={styles.reason}>
                    <Handshake />
                    <span className={styles.primary}>Committed</span>
                    <span className={styles.secondary}>
                        We're committed to getting the job done. You will be our
                        top priority. Our goal is to empower you to reach your
                        goals.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
