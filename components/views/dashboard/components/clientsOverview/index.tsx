import { useSelector } from 'react-redux'
import { Card, Progress } from 'antd'
import {
    BiTargetLock,
    BiEdit,
    BiTrash,
    BiRocket,
    BiMessageAltAdd
} from 'react-icons/bi'

import { PROJECT_PHASES } from '../../../../../utilities/constants'
import { formatDate } from '../../../../../utilities/formatters'
import styles from './ClientsOverview.module.scss'

const ClientCard = ({
    children,
    launchDate,
    name,
    title
}: {
    children: any
    launchDate: Date | null
    name: string
    title: string
}) => {
    return (
        <Card className={styles.clientCard}>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <h2>
                        {title}
                        <span>
                            <BiRocket />
                            {formatDate(launchDate)}
                        </span>
                    </h2>
                </div>
                <span className={styles.clientName}>{name}</span>
                {children}
                <div className={styles.cardFooter}>
                    <BiEdit />
                    <BiTrash />
                </div>
            </div>
        </Card>
    )
}

const ClientsOverview = () => {
    const {
        allClients: { clients },
        developerHours: {
            devHours: { projects }
        }
    } = useSelector((state: any) => state)

    return (
        <div className={styles.ClientsOverviewGrid}>
            {clients?.map((client: any) => {
                const { phases } = client.project

                const currentPhase = phases.filter(
                    (phase: any) => phase.isActive
                )[0]
                const name = `${client.firstName} ${client.lastName}`

                if (!phases?.length) {
                    return (
                        <ClientCard
                            launchDate={null}
                            name={name}
                            title={client.project.title}>
                            <div className={styles.addPhaseSection}>
                                <BiMessageAltAdd />
                                <span>Add Phase Info</span>
                            </div>
                        </ClientCard>
                    )
                }

                const progressPercent = PROJECT_PHASES[currentPhase?.status]
                const totalHours = projects.filter(
                    (project: any) => project.projectPhase === currentPhase._id
                )[0]?.totalHours

                console.log('client.project.title: ', client.project.title)
                console.log('totalHours: ', totalHours)

                return (
                    <ClientCard
                        launchDate={currentPhase?.updatedLaunchDate}
                        name={name}
                        title={client.project.title}>
                        <div className={styles.cardBody}>
                            <div className={styles.totalHours}>
                                Hours Logged: {totalHours}
                            </div>
                            <Progress
                                percent={progressPercent}
                                strokeColor={{
                                    '0%': '#3fc1aa',
                                    '100%': '#3066be'
                                }}
                            />
                        </div>
                    </ClientCard>
                )
            })}
        </div>
    )
}

export default ClientsOverview
