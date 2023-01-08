import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Button, LinearProgress } from '@mui/material'
import {
    BiTargetLock,
    BiEdit,
    BiTrash,
    BiRocket,
    BiMessageAltAdd
} from 'react-icons/bi'

import { Card, Drawer } from '../../../../../elements'
import { DateField } from '../../../../../form'
import { showBanner } from '../../../../../../lib/redux/slices/banner'
import ProjectTitleForm from './ProjectTitleForm'
import ProjectPhaseForm from './ProjectPhaseForm'
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
    onDrawerActivate?: Function
    clientID: string
}) => {
    const router = useRouter()

    const TitleNode = title ? (
        title
    ) : (
        <Button
            onClick={() =>
                onDrawerActivate
                    ? onDrawerActivate(clientID, 'Set Project Title', 'title')
                    : null
            }
            className={styles.clientButton}
            startIcon={<BiMessageAltAdd />}>
            Add Title
        </Button>
    )

    const handleEditClientClick = () =>
        router.push(`/dashboard/clients/${clientID}`)

    return (
        <Card style="dark">
            <div className={styles.cardContent}>
                <h2>{TitleNode}</h2>
                {launchDate ? (
                    <span className={styles.goLiveDate}>
                        <BiRocket />
                        {formatDate(launchDate)}
                    </span>
                ) : null}
                <span className={styles.clientName}>{name}</span>
                {children}
                <div className={styles.cardFooter}>
                    <Button
                        className={styles.clientButton}
                        startIcon={<BiEdit />}
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
                                            'Project Phase Info',
                                            'phase'
                                        )
                                    }
                                    className={styles.clientButton}
                                    startIcon={<BiMessageAltAdd />}>
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
                        clientID={client._id}
                        launchDate={currentPhase?.updatedLaunchDate}
                        name={name}
                        title={client.project.title}>
                        <div className={styles.hoursLogged}>
                            <div className={styles.totalHours}>
                                Hours Logged: {totalHours}
                            </div>
                            <LinearProgress
                                variant="buffer"
                                value={progressPercent}
                                valueBuffer={progressPercent + 10}
                            />
                        </div>
                    </ClientCard>
                )
            })}
            <Drawer
                className={styles.clientsDashDrawer}
                open={drawer.showing}
                onClose={onDrawerClose}
                anchor="right">
                <>
                    {drawer.type === 'title' ? (
                        <ProjectTitleForm
                            clientID={drawer.clientID}
                            onDrawerClose={onDrawerClose}
                        />
                    ) : null}

                    {drawer.type === 'phase' ? (
                        <ProjectPhaseForm
                            clientID={drawer.clientID}
                            onDrawerClose={onDrawerClose}
                        />
                    ) : null}
                </>
            </Drawer>
        </div>
    )
}

export default ClientsOverview
