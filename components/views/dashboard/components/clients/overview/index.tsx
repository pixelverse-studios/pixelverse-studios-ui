import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Card, Progress, Button, Drawer } from 'antd'
import {
    BiTargetLock,
    BiEdit,
    BiTrash,
    BiRocket,
    BiMessageAltAdd
} from 'react-icons/bi'

import { showBanner } from '../../../../../../lib/redux/slices/banner'
import ProjectTitleForm from './ProjectTitleForm'
import { PROJECT_PHASES } from '../../../../../../utilities/constants'
import { formatDate } from '../../../../../../utilities/formatters'
import styles from './ClientsOverview.module.scss'

type ClientDrawerProps = {
    showing: boolean
    clientID: string
    title: string
    type: 'title' | 'phase' | ''
}

const DEFAULT_DRAWER = {
    showing: false,
    clientID: '',
    title: '',
    type: ''
} as ClientDrawerProps

const ClientCard = ({
    children,
    launchDate,
    name,
    title,
    onDrawerActivate,
    clientID
}: {
    children: any
    launchDate: Date | null
    name: string
    title: string
    onDrawerActivate: Function
    clientID: string
}) => {
    const router = useRouter()

    const TitleNode = title ? (
        title
    ) : (
        <Button
            onClick={() =>
                onDrawerActivate(clientID, 'Set Project Title', 'title')
            }
            className={styles.clientButton}
            icon={<BiMessageAltAdd />}>
            Add Title
        </Button>
    )

    const handleEditClientClick = () =>
        router.push(`/dashboard/clients/${clientID}`)

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
                    <Button
                        className={styles.clientButton}
                        icon={<BiEdit />}
                        onClick={handleEditClientClick}>
                        Edit
                    </Button>
                </div>
            </div>
        </Card>
    )
}

const ClientsOverview = () => {
    const dispatch = useDispatch()
    const [drawer, setDrawer] = useState<ClientDrawerProps>(DEFAULT_DRAWER)

    const {
        allClients: { clients },
        developerHours: {
            devHours: { projects }
        }
    } = useSelector((state: any) => state)

    const onDrawerActivate = (
        clientID: string,
        title: string,
        type: 'title' | 'phase'
    ) => setDrawer({ showing: true, title, clientID, type })

    const onDrawerClose = () => setDrawer(DEFAULT_DRAWER)

    const triggerBanner = () =>
        dispatch(
            showBanner({
                message: 'Client project title updated successfully',
                type: 'Success'
            })
        )

    return (
        <div className={styles.ClientsOverviewGrid}>
            <button onClick={triggerBanner}>BANNER</button>
            {clients?.map((client: any) => {
                const { phases } = client.project

                const currentPhase = phases.filter(
                    (phase: any) => phase.isActive
                )[0]
                const name = `${client.firstName} ${client.lastName}`

                if (!phases?.length) {
                    return (
                        <ClientCard
                            clientID={client._id}
                            onDrawerActivate={onDrawerActivate}
                            launchDate={null}
                            name={name}
                            title={client.project.title}>
                            <div className={styles.addPhaseSection}>
                                <Button
                                    onClick={() =>
                                        onDrawerActivate(
                                            client._id,
                                            'Add phase info',
                                            'phase'
                                        )
                                    }
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
                        onDrawerActivate={() => null}
                        clientID={client._id}
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
            <Drawer
                title={drawer.title}
                placement="right"
                open={drawer.showing}
                closable={false}
                onClose={onDrawerClose}>
                {drawer.type === 'title' ? (
                    <ProjectTitleForm
                        clientID={drawer.clientID}
                        onDrawerClose={onDrawerClose}
                    />
                ) : null}

                {drawer.type === 'phase' ? <div>phase drawer</div> : null}
            </Drawer>
        </div>
    )
}

export default ClientsOverview
