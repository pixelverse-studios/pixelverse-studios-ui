import Link from 'next/link'
import { useRouter } from 'next/router'
import { Launch } from '@mui/icons-material'

import { Card } from '../../components/elements'
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
            <div className="contentSize">
                <div className={styles.worksHero}>
                    <h1>Our Standout Works</h1>
                    <p>
                        No matter the size of the project, we always deliver top
                        tier results. <Link href="/contact">Contact us </Link>{' '}
                        now to get started.
                    </p>
                </div>
                <ul className={styles.projectsDisplay}>
                    <Card
                        style="default"
                        media={ModelInsightsImg.src}
                        title="Model Insights"
                        actions={
                            <a
                                href="https://model-insights.netlify.app/"
                                target="_blank">
                                <Launch /> Visit
                            </a>
                        }>
                        <span>
                            A portal for a successful model to show her works,
                            and let aspiring models book coaching sessions.
                        </span>
                    </Card>
                    <Card
                        style="default"
                        media={UnderConstructionImg.src}
                        title="More on the way">
                        <span>
                            We are always ready to take on new projects, working
                            diligently to make your ideas a reality.
                        </span>
                    </Card>
                </ul>
            </div>
        </section>
    )
}

export default WorksPage
