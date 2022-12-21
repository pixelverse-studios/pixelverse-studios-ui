import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LineChart from '.'
import { format, eachDayOfInterval, subDays } from 'date-fns'
import styles from './LineCharts.module.scss'

const margin = { top: 30, right: 90, bottom: 40, left: 50 }
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
        translateX: 85,
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
const yScale = {
    type: 'linear',
    min: 0,
    max: 8
}
const colors = ['#3066be', '#da5b38', '#3fc1aa']

const DeveloperHoursLineChart = () => {
    const {
        devHours: { developers }
    } = useSelector((state: any) => state.developerHours)
    const [dataSource, setDataSource] = useState<any>(null)

    useEffect(() => {
        if (dataSource === null) {
            const today = new Date()
            const chartDateLimit = eachDayOfInterval({
                start: subDays(today, 6),
                end: today
            })
            const formattedDates = chartDateLimit.map((data: any) => {
                return format(new Date(data), 'MM/dd')
            })
            const dataArray = [] as any
            developers?.forEach((developer: any) => {
                const newDataSource = [] as any
                formattedDates.forEach(date => {
                    const hoursToday = developer.data.find((item: any) => {
                        const formatted = format(new Date(item.date), 'MM/dd')

                        if (formatted === date) {
                            return true
                        }

                        return false
                    })

                    if (hoursToday != undefined) {
                        newDataSource.push({
                            x: date,
                            y: hoursToday.hoursLogged
                        })
                    } else {
                        newDataSource.push({ x: date, y: 0 })
                    }
                })

                const devDate = {
                    id: developer.name,
                    data: newDataSource
                }
                return dataArray.push(devDate)
            })
            setDataSource(dataArray)
        }
    }, [developers])

    return (
        <div className={styles.DeveloperHoursLineChart}>
            <LineChart
                dataSource={dataSource}
                margin={margin}
                enableSlices={enableSlices}
                axisLeft={axisLeft}
                axisBottom={axisBottom}
                legends={legends}
                pointSize={pointSize}
                useMesh={useMesh}
                yScale={yScale}
                colors={colors}
            />
        </div>
    )
}

export default DeveloperHoursLineChart
