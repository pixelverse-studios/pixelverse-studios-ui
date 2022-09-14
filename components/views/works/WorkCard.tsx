import { useRouter } from 'next/router'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Card } from 'antd'

import styles from './Works.module.scss'

type WorkCardProps = {
    imgUrl: string
    title: string
    description: string
    pageLink: string
}

const WorkCard = ({ imgUrl, title, description, pageLink }: WorkCardProps) => {
    const router = useRouter()

    const onOverlayClick = () => router.push(pageLink)

    return (
        <div
            className={`${styles.WorkCard} ${
                pageLink ? styles.activeLink : ''
            }`}>
            <img src={imgUrl} alt={title} />
            <div onClick={onOverlayClick} className={styles.cardOverlay}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default WorkCard
