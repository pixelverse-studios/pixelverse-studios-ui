import PieChart from '.'
import { useSelector } from 'react-redux'
import styles from './PieCharts.module.scss'

const innerRadius = 0.5
const margin = { top: 40, right: 80, bottom: 80, left: 80 }
const legends = [
    {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
            {
                on: 'hover',
                style: {
                    itemTextColor: '#000'
                }
            }
        ]
    }
]
const DeveloperHoursPieChart = () => {
    const { devHours } = useSelector((state: any) => state.developerHours)

    const dataSource = [
        {
            id: 'Kevin',
            label: 'Kevin',
            value: 14,
            color: '#5cd926'
        },
        {
            id: 'Phil',
            label: 'Phil',
            value: 32,
            color: '#267ad9'
        },
        {
            id: 'Sami',
            label: 'Sami',
            value: 3,
            color: '#d92626'
        }
    ]

    console.log(devHours)
    return (
        <div className={styles.DeveloperHoursPieChart}>
            <PieChart
                dataSource={dataSource}
                margin={margin}
                innerRadius={innerRadius}
                legends={legends}
            />
        </div>
    )
}
export default DeveloperHoursPieChart
