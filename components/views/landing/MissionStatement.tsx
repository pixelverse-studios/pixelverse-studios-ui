import { useRouter } from 'next/router'

import backgroundImg from '../../../assets/city-buildings.jpg'
import styles from './Landing.module.scss'

const MissionStatement = () => {
    const router = useRouter()

    const onQuoteClick = () => router.push('/contact')

    return (
        <div className={styles.missionStatement}>
            <div
                className={styles.landingImage}
                style={{
                    backgroundImage: `url('${backgroundImg.src}')`
                }}
            />
            <h1>
                Websites made <span>EZPZ</span>
            </h1>
            <span>
                Allow us to elevate your online presence with a unique and fully
                customized website. You focus on your passion while we handle
                creation. For us, every client is a priority as we share a
                common goal, to increase <em>OUR</em> digital footprint.
            </span>
            <button onClick={onQuoteClick}>
                <div className={styles.flipContent}>
                    <span className={styles.front}>Get your quote</span>
                    <span className={styles.back}>Ready to get started?</span>
                </div>
            </button>
        </div>
    )
}

export default MissionStatement
