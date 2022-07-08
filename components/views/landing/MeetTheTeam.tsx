import { FaUserCircle } from 'react-icons/fa'

import styles from './Landing.module.scss'

const ComingSoonBadge = () => (
    <div className={styles.ribbon}>
        <div className={styles.ribbonContent}>Loading</div>
    </div>
)

const MeetTheTeam = () => {
    return (
        <div className={styles.meetTheTeamBlock}>
            <div className={styles.devCard}>
                <FaUserCircle className={styles.headshot} />
                <h2>Phil Arfuso</h2>
                <span className={styles.role}>Lead Developer</span>
            </div>
            <div className={styles.devCard}>
                <ComingSoonBadge />
                <FaUserCircle className={styles.headshot} />
                <h2>Kevin LaCarrubba</h2>
                <span className={styles.role}>Developer</span>
            </div>
            <div className={styles.devCard}>
                <ComingSoonBadge />
                <FaUserCircle className={styles.headshot} />
                <h2>Sami Fares</h2>
                <span className={styles.role}>Developer</span>
            </div>
        </div>
    )
}

export default MeetTheTeam
