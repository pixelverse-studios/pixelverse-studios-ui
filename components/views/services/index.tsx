import { Card, Timeline } from 'antd'

import styles from './Services.module.scss'

const Separator = () => (
    <svg
        className={styles.separator}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="10rem"
        viewBox="0.5 0.2 176 30"
        preserveAspectRatio="none">
        <g transform="translate(-13.668562,-111.38266)">
            <path d="M 13.898015,111.51495 H 190.83044 v 26.19241 l -45.97036,-14.43255 -42.22858,7.48354 -45.970361,-14.96709 -31.003265,16.03617 z" />
        </g>
    </svg>
)

const Services = () => {
    return (
        <section className={styles.ServicesPageContent}>
            <div className={styles.contentBlock}>
                <h1>LEARN MORE ABOUT OUR SERVICES</h1>
                <div className={styles.mainContentBlock}>
                    <p>
                        We hold ourselves to the highest standards. No
                        shortcuts, no cutting corners, always in accordance with
                        the best practices that will make your website stand out
                        from all the rest.
                    </p>
                    <div className={styles.serviceDiagram}>
                        <Card
                            className={`${styles.mainServiceCard} ${styles.baseCard}`}>
                            Custom Web Development
                        </Card>
                        <div className={styles.subServices}>
                            <Card
                                className={`${styles.subServiceCard} ${styles.baseCard}`}>
                                Clean, modern UI
                            </Card>
                            <Card
                                className={`${styles.subServiceCard} ${styles.baseCard}`}>
                                Simple, streamlined UX
                            </Card>
                            <Card
                                className={`${styles.subServiceCard} ${styles.baseCard}`}>
                                Mobile responsive pages
                            </Card>
                            <Card
                                className={`${styles.subServiceCard} ${styles.baseCard}`}>
                                Content management system
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className={styles.contentBlock}>
                <h1>THE JOURNEY</h1>
                <div className={styles.jourenyBlock}>
                    <div className={styles.journeyCards}>
                        <Card
                            className={`${styles.journeyCard} ${styles.baseCard}`}>
                            What is the main purpose of the site?
                        </Card>
                        <Card
                            className={`${styles.journeyCard} ${styles.baseCard}`}>
                            What actions are the users required to take?
                        </Card>
                        <Card
                            className={`${styles.journeyCard} ${styles.baseCard}`}>
                            What is the realistic timeline from start to launch?
                        </Card>
                    </div>
                    <p>
                        The first step in our journey is a kickoff meeting where
                        you present your vision and we can prioritize your wants
                        and needs.
                    </p>
                </div>
            </div>
            <Separator />
            <div className={styles.contentBlock}>
                <h1>OUR WORK FLOW</h1>
                <div className={styles.workFlowBlock}>
                    <p>
                        The first step in our journey is a kickoff meeting where
                        you present your vision and we can prioritize your wants
                        and needs.
                    </p>
                    <Timeline mode="alternate">
                        <Timeline.Item>
                            Mockup/Wireframe design + Style and theme creation
                            (with our graphic designer or you can provide your
                            own assets)
                        </Timeline.Item>
                        <Timeline.Item>
                            Code development (according to an agreed upon time
                            frame and schedule)
                        </Timeline.Item>
                        <Timeline.Item>
                            Internal testing and Quality assurance. We want to
                            make sure the website is flawless before giving a
                            demo
                        </Timeline.Item>
                        <Timeline.Item>
                            Demo website to you, make small tweaks and changes
                            if needed
                        </Timeline.Item>
                        <Timeline.Item>Website launch</Timeline.Item>
                        <Timeline.Item>
                            Ongoing maintenance as needed
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </section>
    )
}

export default Services
