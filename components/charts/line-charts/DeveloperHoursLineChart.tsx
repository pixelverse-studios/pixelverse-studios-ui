import { useSelector } from 'react-redux'
import LineChart from '.'
import { subWeeks, isAfter, format, eachDayOfInterval, subDays } from 'date-fns'
import styles from './LineCharts.module.scss'

const dataSource = [
    {
        id: 'Kevin',
        color: '#5cd926',
        data: [
            {
                x: '12/1/22',
                y: 3
            },
            {
                x: '12/2/22',
                y: 1
            },
            {
                x: '12/3/22',
                y: 0
            },
            {
                x: '12/4/22',
                y: 6
            },
            {
                x: '12/5/22',
                y: 8
            }
        ]
    },
    {
        id: 'Phil',
        color: '#267ad9',
        data: [
            {
                x: '12/1/22',
                y: 12
            },
            {
                x: '12/2/22',
                y: 10
            },
            {
                x: '12/3/22',
                y: 10
            },
            {
                x: '12/4/22',
                y: 15
            },
            {
                x: '12/5/22',
                y: 12
            }
        ]
    },
    {
        id: 'Sami',
        color: '#d92626',
        data: [
            {
                x: '12/1/22',
                y: 1
            },
            {
                x: '12/2/22',
                y: 2
            },
            {
                x: '12/3/22',
                y: 3
            },
            {
                x: '12/4/22',
                y: 4
            },
            {
                x: '12/5/22',
                y: 5
            }
        ]
    }
]
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

//check if date is within the last 2 weeks
const testDate = (dateString: any) => {
    // const dateString = '30-11-2022'
    const [d, m, y] = dateString.split('-').map((n: any) => parseInt(n, 10))
    // months are 0 indexed so you need to subrtract 1.
    const testDate = new Date(y, m - 1, d)

    const dateIsAfter = isAfter(testDate, subWeeks(new Date(), 2))

    return dateIsAfter
}

const DeveloperHoursLineChart = () => {
    const { devHours } = useSelector((state: any) => state.developerHours)
    const { developers } = devHours

    const newDataSource: any = []
    const today = new Date()
    const last2weeks = eachDayOfInterval({
        start: subDays(today, 13),
        end: today
    })

    const formattedWeeks = last2weeks.map((data: any) => {
        return format(new Date(data), 'MM/dd')
    })

    //Map over formattedWeeks
    //Check if the date matches the date in the developers.data
    //if it matches add hoursLogged
    //if it doesnt add 0

    const phillyMaps = developers?.map((dev, index) => {
        const currentDev = []
        formattedWeeks.forEach(day => {
            const matchingDays = dev.data.map(item => {
                const formattedDate = format(new Date(item.date), 'MM/dd')
                if (formattedDate === day) {
                    return {
                        x: day,
                        y: item.hoursLogged
                    }
                } else {
                    return {
                        x: day,
                        y: 0
                    }
                }
            })
            console.log(matchingDays)
        })
    })

    // developers?.forEach((developer: any) => {
    //     let data = developer.data.map((d: any) => {
    //         let newDate = format(new Date(d.date), 'MM/dd')
    //         if (formattedWeeks.includes(newDate)) {
    //             return { x: newDate, y: d.hoursLogged }
    //         } else {
    //             return { x: newDate, y: 0 }
    //         }
    //     })
    //     let devDate = {
    //         id: developer.name,
    //         data: data
    //     }
    //     return newDataSource.push(devDate)
    // })
    // console.log(newDataSource)
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
