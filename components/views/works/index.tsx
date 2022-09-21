import Link from 'next/link'

import WorkCard from './WorkCard'
import ModelInsightsImg from '../../../assets/works/model-insights.png'
import UnderConstructionImg from '../../../assets/works/under-construction.png'
import WorkBanner from '../../../assets/works/banner.jpg'
import styles from './Works.module.scss'

const WorksPage = () => {
    return (
        <section className={styles.WorksPageContent}>
            <img src={WorkBanner.src} alt="banner" />
            <h2>Featured Work</h2>
            <div className={styles.contactRow}>
                <Link href="/contact">Contact us </Link> now to get started
            </div>
            <div className={styles.projectsDisplay}>
                <WorkCard
                    imgUrl={ModelInsightsImg.src}
                    title="Model Insights"
                    description="A portal for a successful model to show her works, and let aspiring models book coaching sessions."
                    pageLink="https://model-insights.netlify.com/"
                />
                <WorkCard
                    imgUrl={UnderConstructionImg.src}
                    title="Coming soon"
                    description="We are always ready to help make your idea a reality"
                    pageLink=""
                />
            </div>
        </section>
    )
}

export default WorksPage
