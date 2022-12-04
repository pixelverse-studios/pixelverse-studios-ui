import { useSelector } from 'react-redux'

import styles from './ProjectOverview.module.scss'

const ProjectOverview = () => {
    const { projects } = useSelector((state: any) => state.allProjects)

    return <div></div>
}

export default ProjectOverview
