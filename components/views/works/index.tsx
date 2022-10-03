import Link from 'next/link'
import { useRouter } from 'next/router'
import { Card } from 'antd'

const { Meta } = Card

import ModelInsightsImg from '../../../assets/works/model-insights.png'
import UnderConstructionImg from '../../../assets/works/under-construction.jpg'
import styles from './Works.module.scss'

const WorksPage = () => {
    const router = useRouter()

    const onItemClick = (page: string) => {
        router.push(page)
    }

    return (
        <section className={styles.WorksPageContent}>
            <div className={styles.worksHero}>
                <h1>Our Standout Works</h1>
                <p>
                    No matter the size of the project, we always deliver top
                    tier results. <Link href="/contact">Contact us </Link> now
                    to get started.
                </p>
            </div>
            <ul className={styles.projectsDisplay}>
                <li>
                    <a
                        href="https://model-insights.netlify.app/"
                        target="_blank">
                        <Card
                            hoverable
                            cover={
                                <div
                                    className={styles.imgDisplay}
                                    style={{
                                        backgroundImage: `url(${ModelInsightsImg.src})`
                                    }}
                                />
                            }>
                            <Meta
                                title="Model Insights"
                                description="A portal for a successful model to show her works, and let aspiring models book coaching sessions."
                            />
                        </Card>
                    </a>
                </li>
                <li>
                    <Card
                        hoverable
                        cover={
                            <div
                                className={styles.imgDisplay}
                                style={{
                                    backgroundImage: `url(${UnderConstructionImg.src})`
                                }}
                            />
                        }>
                        <Meta
                            title="More on the way"
                            description="We are always ready to take on new projects, working diligently to make your ideas a reality."
                        />
                    </Card>
                </li>
            </ul>
        </section>
    )
}

export default WorksPage
