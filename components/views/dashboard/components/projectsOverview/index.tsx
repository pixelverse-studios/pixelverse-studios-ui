import { useSelector } from 'react-redux'
import { Card } from 'antd'

import styles from './ProjectOverview.module.scss'

const ProjectOverview = () => {
    const completedProjects = []
    const { projects } = useSelector((state: any) => state.allProjects)

    return (
        <Card className={styles.ProjectOverviewContent}>
            Projects:{completedProjects.length} / {projects.length} completed
        </Card>
    )
}

export default ProjectOverview
