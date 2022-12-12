import { useSelector } from 'react-redux'
import { Card } from 'antd'
import {
    BiTargetLock,
    BiEdit,
    BiTrash,
    BiTime,
    BiMessageAltAdd
} from 'react-icons/bi'

import styles from './ClientsOverview.module.scss'

const ClientCard = ({
    children,
    launchDate,
    title
}: {
    children: any
    launchDate: string | null
    title: string
}) => (
    <Card className={styles.clientCard}>
        <div className={styles.cardHeader}>
            <h2>{title}</h2>
            <div>{launchDate}</div>
        </div>
        <div className={styles.addPhaseSection}>
            <BiMessageAltAdd />
            <span>Add Phase Info</span>
        </div>
        <div className={styles.cardFooter}>
            <BiEdit /> | <BiTrash />
        </div>
    </Card>
)

const ClientsOverview = () => {
    // const { clients } = useSelector((state: any) => state.allClients)

    return (
        <div className={styles.ClientsOverviewGrid}>
            cards go here
            {/* {clients?.map((client: any, index: number) => {
                // console.log(client)
                const { phases } = client.project

                const currentPhase = phases[index]
                // format date
                const launchDate = currentPhase?.updatedLaunchDate
                    ? `${(<BiTargetLock />)} ${phases[0]?.updatedLaunchDate}`
                    : null

                if (!phases) {
                    return (
                        <ClientCard
                            launchDate={launchDate}
                            title={client.project.title}>
                            <div className={styles.addPhaseSection}>
                                <BiMessageAltAdd />
                                <span>Add Phase Info</span>
                            </div>
                        </ClientCard>
                    )
                }

                return (
                    <ClientCard
                        launchDate={launchDate}
                        title={client.project.title}>
                        <span key={client.firstName}>
                            {client.firstName} {client.lastName}
                        </span>
                    </ClientCard>
                )
            })} */}
        </div>
    )
}

export default ClientsOverview
