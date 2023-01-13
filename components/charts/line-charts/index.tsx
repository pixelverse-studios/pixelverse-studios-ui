import { ResponsiveLine } from '@nivo/line'
import { useSelector } from 'react-redux'

import { CHART_THEME } from '../chartTheme'

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
    yScale?: any
    colors?: any
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
    yScale,
    colors
}: LineChartProps) => {
    const { mode } = useSelector((state: any) => state.theme)

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
            colors={colors}
            legends={legends}
            theme={CHART_THEME[mode]}
        />
    )
}

export default LineChart
