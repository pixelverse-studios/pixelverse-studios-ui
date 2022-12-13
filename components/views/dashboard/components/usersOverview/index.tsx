import { useSelector } from 'react-redux'
import { Card, Popover } from 'antd'

import styles from './UsersOverview.module.scss'

const UsersOverview = () => {
    const { users } = useSelector((state: any) => state.allUsers)

    const popoverContent = (
        <ul>
            {users?.map((user: any, index: number) => (
                <li key={index}>
                    {user.firstName} {user.lastName}
                </li>
            ))}
        </ul>
    )

    return (
        <Card className={styles.UsersOverview}>
            <Popover
                className={styles.userPopover}
                title="Users"
                content={popoverContent}>
                Users: {users?.length}
            </Popover>
        </Card>
    )
}

export default UsersOverview
