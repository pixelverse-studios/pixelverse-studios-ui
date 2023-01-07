import {
    Card as MuiCard,
    CardContent,
    CardMedia,
    CardActions
} from '@mui/material'

import styles from './Card.module.scss'

interface CardProps {
    children?: JSX.Element | JSX.Element[]
    media?: string
    title?: string
    url?: string
    actions?: any
    style?: 'dark' | 'default'
}

const Card = ({ children, media, title, actions, style }: CardProps) => {
    const cardClass = () => {
        switch (style) {
            case 'dark':
                return styles.DarkCard
            case 'default':
                return styles.Card
            default:
                return ''
        }
    }
    return (
        <MuiCard className={cardClass()} variant="outlined">
            <CardMedia component="img" image={media} title={title} />
            <CardContent>{children}</CardContent>
            {actions != undefined ? <CardActions>{actions}</CardActions> : null}
        </MuiCard>
    )
}

export default Card
