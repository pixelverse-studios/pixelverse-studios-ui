import { useSelector } from 'react-redux'
import LineChart from '.'
import { format, eachDayOfInterval, subDays } from 'date-fns'
import styles from './LineCharts.module.scss'

const margin = { top: 30, right: 70, bottom: 40, left: 50 }

const enableSlices = 'x'
const axisLeft = {
    tickSize: 1,
    tickPadding: 5,
    legend: 'hours',
    legendOffset: -40,
    legendPosition: 'middle'
}
const axisBottom = {
    tickSize: 1,
    tickPadding: 5,
    legend: 'date',
    legendOffset: 30,
    legendPosition: 'middle'
}
const legends = [
    {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
            {
                on: 'hover',
                style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                }
            }
        ]
    }
]
const pointSize = 6
const useMesh = true

const DeveloperHoursLineChart = () => {
    const { devHours } = useSelector((state: any) => state.developerHours)
    const { developers } = devHours

    const newDataSource: any = []
    const today = new Date()
    const chartDateLimit = eachDayOfInterval({
        start: subDays(today, 6),
        end: today
    })

    const formattedDates = chartDateLimit.map((data: any) => {
        return format(new Date(data), 'MM/dd')
    })

    developers?.forEach((developer: any) => {
        const dataSource = [] as any
        formattedDates.forEach(date => {
            // ex: 12/6
            const hoursToday = developer.data.find((item: any) => {
                const formatted = format(new Date(item.date), 'MM/dd')

                if (formatted === date) {
                    return true
                }

                return false
            })

            if (hoursToday != undefined) {
                // we have hours
                dataSource.push({ x: date, y: hoursToday.hoursLogged })
            } else {
                dataSource.push({ x: date, y: 0 })
            }
        })

        const devDate = {
            id: developer.name,
            data: dataSource
        }
        return newDataSource.push(devDate)
    })

    return (
        <div className={styles.DeveloperHoursLineChart}>
            <LineChart
                dataSource={newDataSource}
                margin={margin}
                enableSlices={enableSlices}
                axisLeft={axisLeft}
                axisBottom={axisBottom}
                legends={legends}
                pointSize={pointSize}
                useMesh={useMesh}
            />
        </div>
    )
}

export default DeveloperHoursLineChart
