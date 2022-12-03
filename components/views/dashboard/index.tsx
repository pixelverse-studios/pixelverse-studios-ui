import styles from './Dashboard.module.scss'

const Dashboard = () => {
    return (
        <section className={styles.Dashboard}>
            <h1>Clients</h1>
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
        </section>
    )
}

export default Dashboard
