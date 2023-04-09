import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    CardActions
} from '@mui/material'
import Link from 'next/link'

import styles from './Card.module.scss'

interface CardProps {
    children?: JSX.Element | JSX.Element[]
    media?: string
    title?: string
    url?: string
    actions?: any
    style?: 'dark' | 'default'
}

const Card = ({ children, media, title, actions }: CardProps) => {
    // const cardClass = () => {
    //     switch (style) {
    //         case 'dark':
    //             return styles.DarkCard
    //         case 'default':
    //             return styles.Card
    //         default:
    //             return ''
    //     }
    // }
    return (
        <MuiCard variant="outlined">
            <CardMedia component="img" image={media} title={title} />
            <CardContent>{children}</CardContent>
            {actions != undefined ? <CardActions>{actions}</CardActions> : null}
        </MuiCard>
    )
}

const DisplayContent = ({
    media,
    title,
    description
}: {
    media: string
    title: string
    description: string
}) => (
    <li className={styles.WorkCard}>
        <div style={{ backgroundImage: `url(${media})` }}>
            <div>
                <p>{description}</p>
            </div>
        </div>
        <h3>{title}</h3>
    </li>
)
export const WorkCard = ({
    media,
    title,
    url,
    description
}: {
    media: string
    title: string
    url: string
    description: string
}) => {
    if (url) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                <DisplayContent
                    media={media}
                    title={title}
                    description={description}
                />
            </a>
        )
    }
    return (
        <DisplayContent media={media} title={title} description={description} />
    )
}

export default Card
