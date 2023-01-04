import PieChart from '.'
import { useSelector } from 'react-redux'

import { Card } from '../../elements'
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
const colors = ['#3066be', '#da5b38', '#3fc1aa']
const DeveloperHoursPieChart = () => {
    const { devHours } = useSelector((state: any) => state.developerHours)

    const dataSource = devHours?.developers?.map((data: any) => {
        return {
            id: data.name,
            label: data.name,
            value: data.totalHours
        }
    })

    return (
        <Card customStyling>
            <div className={styles.DeveloperHoursPieChart}>
                <PieChart
                    dataSource={dataSource}
                    margin={margin}
                    innerRadius={innerRadius}
                    legends={legends}
                    colors={colors}
                />
            </div>
        </Card>
    )
}
export default DeveloperHoursPieChart
