import { ResponsiveLine } from '@nivo/line'
import styles from './LineChart.module.scss'
const data = [
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
                y: 24
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

const MyResponsiveLine = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto'
        }}
        enableSlices="x"
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisLeft={{
            tickSize: 1,
            tickPadding: 5,
            legend: 'hours',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={6}
        pointBorderWidth={0}
        pointLabelYOffset={-12}
        useMesh={true}
        colors={data => data.color}
        legends={[
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
        ]}
    />
)

const LineChart = () => {
    return (
        <div className={styles.lineChart}>
            <MyResponsiveLine />
        </div>
    )
}

export default LineChart
