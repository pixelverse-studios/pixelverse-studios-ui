import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'

import { GET_ALL_USERS, GET_DEV_HOURS } from '../../../lib/gql/queries/user'
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
    setDevelopers,
    setLoadingDevHours
} from '../../../lib/redux/slices/developerHours'
import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../lib/redux/slices/banner'
import UsersOverview from './components/usersOverview'
import ProjectOverview from './components/projectsOverview'
import { DeveloperHoursLineChart, DeveloperHoursPieChart } from '../../charts'
import Loader from '../../loader/triangle'
import styles from './Dashboard.module.scss'

const DashboardWrapper = ({ children }: { children: any }) => (
    <section className={styles.Dashboard}>
        <h1>Clients</h1>
        {children}
    </section>
)

const Dashboard = () => {
    const dispatch = useDispatch()
    const { loadingAllUsers } = useSelector((state: any) => state.allUsers)
    const { loadingAllClients } = useSelector((state: any) => state.allClients)
    const { loadingDevHours } = useSelector((state: any) => state.devHours)

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
    const [getDeveloperHours] = useLazyQuery(GET_DEV_HOURS, {
        onCompleted({ getDeveloperHours: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(setDevelopers(data))
            }
            dispatch(setLoadingDevHours(false))
        },
        onError() {
            dispatch(setLoadingDevHours(false))
            dispatch(showTechnicalDifficultiesBanner())
        }
    })

    useEffect(() => {
        dispatch(setLoadingAllUsers(true))
        dispatch(setLoadingAllClients(true))
        dispatch(setLoadingDevHours(true))
        getAllUsers()
        getAllClients()
        getDeveloperHours()
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
                <DeveloperHoursLineChart />
                <DeveloperHoursPieChart />
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
