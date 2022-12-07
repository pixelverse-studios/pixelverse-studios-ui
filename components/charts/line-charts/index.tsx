import React from 'react'
import { ResponsiveLine } from '@nivo/line'

type LineChartProps = {
    data: any
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
}

const LineChart = ({
    data,
    margin,
    enableSlices,
    axisTop,
    axisRight,
    axisLeft,
    axisBottom,
    legends,
    pointSize,
    useMesh
}: LineChartProps) => {
    return (
        <ResponsiveLine
            data={data}
            margin={margin}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto'
            }}
            enableSlices={enableSlices}
            yFormat=" >-.2f"
            axisLeft={axisLeft}
            axisBottom={axisBottom}
            pointSize={pointSize}
            pointBorderWidth={0}
            pointLabelYOffset={-12}
            useMesh={useMesh}
            colors={data => data.color}
            legends={legends}
        />
    )
}

export default LineChart
