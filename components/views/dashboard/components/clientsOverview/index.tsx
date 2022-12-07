import { useSelector } from 'react-redux'
import { Card } from 'antd'
import { BiTargetLock, BiEdit, BiTrash, BiTime } from 'react-icons/bi'

import styles from './ClientsOverview.module.scss'

const ClientsOverview = () => {
    const { clients } = useSelector((state: any) => state.allClients)

    return (
        <div className={styles.ClientsOverviewGrid}>
            {clients?.map((client: any) => {
                console.log(client)
                const { phases } = client.project

                const currentPhaseIndex = 0
                const currentPhase = phases[currentPhaseIndex]
                const launchDate = currentPhase?.updatedLaunchDate
                    ? `${(<BiTargetLock />)} ${phases[0]?.updatedLaunchDate}`
                    : null
                const totalHoursLogged =
                    currentPhase?.hoursLogged?.length > 0
                        ? currentPhase.hoursLogged
                              .map((item: any) => item.hours)
                              .reduce(
                                  (accumulator: any, item: any) =>
                                      accumulator + item
                              )
                        : null

                console.log('totalHoursLogged: ', totalHoursLogged)
                return (
                    <Card className={styles.clientCard}>
                        <div className={styles.cardHeader}>
                            <h2>{client.project.title}</h2>
                            <div>{launchDate}</div>
                        </div>
                        <span>
                            {client.firstName} {client.lastName}
                        </span>
                        <div className={styles.cardFooter}>
                            <BiEdit /> | <BiTrash />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default ClientsOverview
