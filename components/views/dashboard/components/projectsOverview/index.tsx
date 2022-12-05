import { useSelector } from 'react-redux'
import { Card } from 'antd'

import { useRouter } from 'next/router'

import styles from './ProjectOverview.module.scss'

const ProjectOverview = () => {
    const router = useRouter()
    const completedProjects = []
    const { projects } = useSelector((state: any) => state.allProjects)

    return (
        <Card
            className={styles.ProjectOverviewContent}
            onClick={() => router.push('/dashboard/projects/overview')}>
            Projects: {completedProjects.length} / {projects.length} completed
        </Card>
    )
}

export default ProjectOverview
