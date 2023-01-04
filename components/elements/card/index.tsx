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
    customStyling: boolean
}

const Card = ({
    children,
    media,
    title,
    actions,
    customStyling
}: CardProps) => (
    <MuiCard className={customStyling ? styles.Card : ''} variant="outlined">
        <CardMedia component="img" image={media} title={title} />
        <CardContent>{children}</CardContent>
        {actions != undefined ? <CardActions>{actions}</CardActions> : null}
    </MuiCard>
)

export default Card
