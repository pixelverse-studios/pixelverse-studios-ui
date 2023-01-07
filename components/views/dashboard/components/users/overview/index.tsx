import { useSelector } from 'react-redux'
import { Tooltip } from '@mui/material'

import { Card } from '../../../../../elements'
import styles from './UsersOverview.module.scss'

const UsersOverview = () => {
    const { users } = useSelector((state: any) => state.allUsers)

    return (
        <Card style="dark">
            <div id="usersElement" className={styles.UsersOverview}>
                <h1>{users?.length} Users</h1>
                <ul className={styles.usersList}>
                    {users?.map((user: any, index: number) => (
                        <li key={index}>{user.firstName}</li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default UsersOverview
