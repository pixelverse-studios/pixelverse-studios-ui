import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@mui/lab'

import { Card } from '../../components/elements'
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
                <div className="contentSize">
                    <h1>LEARN MORE ABOUT OUR SERVICES</h1>
                    <div className={styles.mainContentBlock}>
                        <p>
                            We hold ourselves to the highest standards,
                            utilizing only the best practices to create a custom
                            website that you can be proud of.
                        </p>
                        <div className={styles.serviceDiagram}>
                            <Card classes={styles.serviceCard} style="default">
                                <div className={styles.mainServiceCard}>
                                    Custom Web Development
                                </div>
                            </Card>
                            <div className={styles.subServices}>
                                <div className={styles.subServiceGroup}>
                                    <Card
                                        classes={styles.serviceCard}
                                        style="default">
                                        <div className={styles.subServiceCard}>
                                            Clean, modern UI
                                        </div>
                                    </Card>
                                    <Card
                                        classes={styles.serviceCard}
                                        style="default">
                                        <div className={styles.subServiceCard}>
                                            Simple, streamlined UX
                                        </div>
                                    </Card>
                                </div>
                                <div className={styles.subServiceGroup}>
                                    <Card
                                        classes={styles.serviceCard}
                                        style="default">
                                        <div className={styles.subServiceCard}>
                                            Mobile responsive pages
                                        </div>
                                    </Card>
                                    <Card
                                        classes={styles.serviceCard}
                                        style="default">
                                        <div className={styles.subServiceCard}>
                                            Content management system
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separator />
            <div className={styles.contentBlock}>
                <div className="contentSize">
                    <h1>THE JOURNEY</h1>
                    <div className={styles.jourenyBlock}>
                        <div className={styles.journeyCards}>
                            <Card classes={styles.serviceCard} style="default">
                                <div className={styles.journeyCard}>
                                    What are you looking to accomplish with the
                                    site?
                                </div>
                            </Card>
                            <Card classes={styles.serviceCard} style="default">
                                <div className={styles.journeyCard}>
                                    What actions are your users intended to
                                    complete? (fill out a form, email for quote,
                                    etc).
                                </div>
                            </Card>
                            <Card classes={styles.serviceCard} style="default">
                                <div className={styles.journeyCard}>
                                    What is your projected timeframe in regards
                                    to launching your website?
                                </div>
                            </Card>
                        </div>
                        <p>
                            Once these questions are answered and we touch on
                            some additional talking points, here is what our
                            process looks like.
                        </p>
                    </div>
                </div>
            </div>
            <Separator />
            <div className={styles.contentBlock}>
                <div className="contentSize">
                    <h1>OUR WORK FLOW</h1>
                    <div className={styles.workFlowBlock}>
                        <p>
                            The first step in our journey is a kickoff meeting
                            where you present your vision so we can work
                            together to accomplish your project in a timely
                            manner.
                        </p>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>
                                        Mockup/Wireframe design + Style and
                                        theme creation (with our graphic
                                        designer or you can provide your own
                                        assets)
                                    </span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>
                                        Code development (according to an agreed
                                        upon time frame and schedule)
                                    </span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>
                                        Internal testing and Quality assurance.
                                        We want to make sure the website is
                                        flawless before giving a demo
                                    </span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>
                                        Demo website to you, make small tweaks
                                        and changes if needed
                                    </span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>Website launch</span>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="info" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <span>Ongoing maintenance as needed</span>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
