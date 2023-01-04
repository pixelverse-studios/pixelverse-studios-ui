import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material'

import { Card } from '../../../../../elements'
import styles from './UsersOverview.module.scss'

const UsersOverview = () => {
    const { users } = useSelector((state: any) => state.allUsers)

    const popoverContent = (
        <ul className={styles.usersList}>
            {users?.map((user: any, index: number) => (
                <li key={index}>
                    {user.firstName} {user.lastName}
                </li>
            ))}
        </ul>
    )

    return (
        <Card customStyling>
            <Tooltip arrow placement="bottom" title={popoverContent}>
                <span id="usersElement">Users: {users?.length}</span>
            </Tooltip>
        </Card>
    )
}

export default UsersOverview
