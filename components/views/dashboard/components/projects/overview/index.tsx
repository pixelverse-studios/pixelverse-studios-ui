import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Visibility } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { Card } from '../../../../../elements'
import styles from './ProjectOverview.module.scss'

const ProjectOverview = () => {
    const router = useRouter()
    const completedProjects = []
    const { clients } = useSelector((state: any) => state.allClients)

    return (
        <Card
            style="dark"
            actions={
                <IconButton
                    onClick={() => router.push('/dashboard/projects/overview')}>
                    <Visibility />
                </IconButton>
            }>
            <>
                Projects: {completedProjects?.length} / {clients.length}{' '}
                completed
            </>
        </Card>
    )
}

export default ProjectOverview
