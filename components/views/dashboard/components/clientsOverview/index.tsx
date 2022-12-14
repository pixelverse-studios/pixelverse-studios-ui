import { useSelector } from 'react-redux'
import { Card, Progress, Button } from 'antd'
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
    const TitleNode = title ?? (
        <Button className={styles.clientButton} icon={<BiMessageAltAdd />}>
            Add Title
        </Button>
    )

    return (
        <Card className={styles.clientCard}>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <h2>
                        {TitleNode}
                        {launchDate ? (
                            <span>
                                <BiRocket />
                                {formatDate(launchDate)}
                            </span>
                        ) : null}
                    </h2>
                </div>
                <span className={styles.clientName}>{name}</span>
                {children}
                <div className={styles.cardFooter}>
                    <Button className={styles.clientButton} icon={<BiEdit />}>
                        Edit
                    </Button>
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
                                <Button
                                    className={styles.clientButton}
                                    icon={<BiMessageAltAdd />}>
                                    Add Phase Info
                                </Button>
                            </div>
                        </ClientCard>
                    )
                }

                const progressPercent = PROJECT_PHASES[currentPhase?.status]
                const totalHours = projects.filter(
                    (project: any) => project.projectPhase === currentPhase._id
                )[0]?.totalHours

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
