import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

import { GET_ALL_USERS } from '../../../lib/gql/queries/user'
import Loader from '../../loader/triangle'
import styles from './Dashboard.module.scss'

const DashboardWrapper = ({ children }: { children: any }) => (
    <section className={styles.Dashboard}>
        <h1>Clients</h1>
        {children}
    </section>
)

const Dashboard = () => {
    const [getAllUsers] = useLazyQuery(GET_ALL_USERS, {
        onCompleted() {},
        onError() {
            // dispatch banner with error message
        }
    })

    useEffect(() => {
        // dispatch loading
    }, [])

    // if (true) {
    //     return (
    //         <DashboardWrapper>
    //             <Loader />
    //         </DashboardWrapper>
    //     )
    // }

    return (
        <DashboardWrapper>
            <div className={styles.personnelOverview}>
                <div>CLIENTS OVERVIEW</div>
                <div>USERS OVERVIEW</div>
            </div>
            <div className={styles.productivityCharts}>
                <div>DEVELOPERS HOURS LINE CHART</div>
                <div>DEVELOPERS TOTAL HOURS PIE CHART</div>
            </div>
            <div className={styles.clientsDisplayGrid}>
                <div>CLIENT 1</div>
                <div>CLIENT 2</div>
                <div>CLIENT 3</div>
                <div>CLIENT 4</div>
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard
