import MissionStatement from './MissionStatement'
import WhyUs from './WhyUs'
// import MeetTheTeam from './MeetTheTeam'
import styles from './Landing.module.scss'

const Landing = () => {
    return (
        <section className={styles.LandingPageContent}>
            <MissionStatement />
            <WhyUs />
            {/* <MeetTheTeam /> */}
        </section>
    )
}

export default Landing
