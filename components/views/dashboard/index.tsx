import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

import { GET_ALL_USERS } from '../../../lib/gql/queries/user'
import { FETCH_ALL_CLIENTS } from '../../../lib/gql/queries/clients'
import {
    setLoadingAllClients,
    setClients
} from '../../../lib/redux/slices/allClients'
import {
    setLoadingAllUsers,
    setUsers
} from '../../../lib/redux/slices/allUsers'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../lib/redux/slices/banner'
import UsersOverview from './components/usersOverview'
import ProjectOverview from './components/projectsOverview'
import ClientsOverview from './components/clientsOverview'
import Loader from '../../loader/triangle'
import styles from './Dashboard.module.scss'

const DashboardWrapper = ({ children }: { children: any }) => (
    <section className={styles.Dashboard}>{children}</section>
)

const Dashboard = () => {
    const dispatch = useDispatch()
    const { loadingAllUsers } = useSelector((state: any) => state.allUsers)
    const { loadingAllClients } = useSelector((state: any) => state.allClients)

    const [getAllUsers] = useLazyQuery(GET_ALL_USERS, {
        onCompleted({ getAllUsers: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(setUsers(data))
            }

            dispatch(setLoadingAllUsers(false))
        },
        onError() {
            dispatch(setLoadingAllUsers(false))
            dispatch(showTechnicalDifficultiesBanner())
        }
    })

    const [getAllClients] = useLazyQuery(FETCH_ALL_CLIENTS, {
        onCompleted({ getAllClients: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(setClients(data))
            }
            dispatch(setLoadingAllClients(false))
        },
        onError() {
            dispatch(setLoadingAllClients(false))
            dispatch(showTechnicalDifficultiesBanner())
        }
    })

    useEffect(() => {
        dispatch(setLoadingAllUsers(true))
        dispatch(setLoadingAllClients(true))
        getAllUsers()
        getAllClients()
    }, [])

    if (loadingAllUsers || loadingAllClients) {
        return (
            <DashboardWrapper>
                <Loader />
            </DashboardWrapper>
        )
    }

    return (
        <DashboardWrapper>
            <div className={styles.personnelOverview}>
                <ProjectOverview />
                <UsersOverview />
            </div>
            <div className={styles.productivityCharts}>
                <div>DEVELOPERS HOURS LINE CHART</div>
                <div>DEVELOPERS TOTAL HOURS PIE CHART</div>
            </div>
            <h1>Clients</h1>
            <ClientsOverview />
        </DashboardWrapper>
    )
}

export default Dashboard
