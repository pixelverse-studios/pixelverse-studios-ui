import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { IconButton } from '@mui/material'
import {
    BiTargetLock,
    BiEdit,
    BiTrash,
    BiRocket,
    BiMessageAltAdd
} from 'react-icons/bi'
import { Info, Close } from '@mui/icons-material'

import { Card, Drawer } from '../../../../../elements'
import { DateField, Button } from '../../../../../form'
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
}

const DEFAULT_DRAWER = {
    showing: false,
    clientID: '',
    title: ''
} as ClientDrawerProps

const ClientCard = ({
    title,
    clientName,
    clientID,
    status,
    editTitleClick
}: {
    title: string
    clientName: string
    clientID: string
    status: boolean
    editTitleClick: any
}) => {
    const onAddTitleClick = () => editTitleClick(clientID, 'Set Project Title')

    return (
        <Card style="dark">
            <div className={styles.clientCard}>
                <div className={styles.info}>
                    {title ? (
                        <h4>{title}</h4>
                    ) : (
                        <div
                            className={styles.titleAlert}
                            onClick={onAddTitleClick}>
                            <Info />
                            Set Title
                        </div>
                    )}
                    <h5>{clientName}</h5>
                </div>
                <div
                    className={`${styles.statusDisplay} ${
                        status ? styles.active : styles.inactive
                    }`}>
                    {status ? 'ACTIVE' : 'INACTIVE'}
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

    const onDrawerActivate = (clientID: string, title: string) =>
        setDrawer({ showing: true, title, clientID })

    const onDrawerClose = () => setDrawer(DEFAULT_DRAWER)

    return (
        <div className={styles.ClientsOverviewGrid}>
            {clients?.map((client: any) => {
                const { phases } = client.project

                const currentPhase = phases.filter(
                    (phase: any) => phase.isActive
                )[0]
                const name = `${client.firstName} ${client.lastName}`

                return (
                    <ClientCard
                        editTitleClick={onDrawerActivate}
                        title={client.project.title}
                        clientName={name}
                        clientID={client._id}
                        status={currentPhase?.status}
                    />
                )
            })}
            <Drawer
                className={styles.clientsDashDrawer}
                open={drawer.showing}
                onClose={onDrawerClose}
                anchor="right">
                <div className={styles.drawerHeader}>
                    {drawer.title}
                    <IconButton>
                        <Close />
                    </IconButton>
                </div>
                <ProjectTitleForm
                    clientID={drawer.clientID}
                    onDrawerClose={onDrawerClose}
                />
            </Drawer>
        </div>
    )
}

export default ClientsOverview
