import { useRouter } from 'next/router'
import { FaHandsHelping, FaBullseye, FaClock } from 'react-icons/fa'

import backgroundImg from '../../../assets/city-buildings.jpg'
import styles from './Landing.module.scss'

const Landing = () => {
    const router = useRouter()

    const onQuoteClick = () => router.push('/contact')

    return (
        <section className={styles.LandingPageContent}>
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
                    Allow us to elevate your online presence with a unique and
                    fully customized website. You focus on your passion while we
                    handle creation. For us, every client is a priority as we
                    share a common goal, to increase <em>OUR</em> digital
                    footprint.
                </span>
                <button onClick={onQuoteClick}>
                    <div className={styles.flipContent}>
                        <span className={styles.front}>Get your quote</span>
                        <span className={styles.back}>
                            Ready to get started?
                        </span>
                    </div>
                </button>
            </div>
            <div className={styles.useUsBlock}>
                <h2>Why use us?</h2>
                <div className={styles.reasonsList}>
                    <div className={styles.reason}>
                        <FaClock />
                        <span className={styles.primary}>Efficient</span>
                        <span className={styles.secondary}>
                            Your timeline is our schedule. We work fast, yet
                            efficiently to get you set to meet your goals.
                        </span>
                    </div>
                    <div className={styles.reason}>
                        <FaBullseye />
                        <span className={styles.primary}>Accurate</span>
                        <span className={styles.secondary}>
                            Attention to detail is key. You can trust us to
                            provide an excellent, finished product every time.
                        </span>
                    </div>
                    <div className={styles.reason}>
                        <FaHandsHelping />
                        <span className={styles.primary}>Caring</span>
                        <span className={styles.secondary}>
                            We treat our clients like family. Your project will
                            be our priority.
                        </span>
                    </div>
                </div>
            </div>
            <div>
                about the team, with link to about page. more in depth about
                each person
            </div>
        </section>
    )
}

export default Landing
