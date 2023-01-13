import { Button } from '@mui/material'
import { MouseEventHandler } from 'react'

const CancelButton = ({
    label,
    onCancel
}: {
    label: string
    onCancel: MouseEventHandler
}) => {
    return (
        <Button color="secondary" variant="contained" onClick={onCancel}>
            {label}
        </Button>
    )
}

export default CancelButton
