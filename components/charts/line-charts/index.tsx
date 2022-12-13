import { ResponsiveLine } from '@nivo/line'

type LineChartProps = {
    dataSource: {
        id: string
        color: string
        data: {
            x: string
            y: number
        }[]
    }[]

    margin?: {
        top?: number
        right?: number
        bottom?: number
        left?: number
    }
    enableSlices?: false | 'x' | 'y' | undefined
    axisTop?: any
    axisRight?: any
    axisLeft?: any
    axisBottom?: any
    pointSize?: number
    useMesh?: boolean
    legends?: any
    yScale?: ScaleSpec
}
const theme = {
    fontSize: '20px',
    textColor: 'red'
}

const LineChart = ({
    dataSource,
    margin,
    enableSlices,
    axisTop,
    axisRight,
    axisLeft,
    axisBottom,
    legends,
    pointSize,
    useMesh,
    yScale
}: LineChartProps) => {
    return (
        <ResponsiveLine
            data={dataSource}
            margin={margin}
            xScale={{ type: 'point' }}
            yScale={yScale}
            enableGridX={true}
            enableGridY={true}
            enableSlices={enableSlices}
            yFormat=" >-.2f"
            axisTop={axisTop}
            axisRight={axisRight}
            axisBottom={axisBottom}
            axisLeft={axisLeft}
            pointSize={pointSize}
            pointBorderWidth={0}
            pointLabelYOffset={-12}
            useMesh={useMesh}
            colors={{ scheme: 'nivo' }}
            legends={legends}
            theme={{
                fontSize: 15,
                textColor: 'black'
            }}
        />
    )
}

export default LineChart
