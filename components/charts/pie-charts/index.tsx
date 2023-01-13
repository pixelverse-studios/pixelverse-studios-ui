import { ResponsivePie } from '@nivo/pie'
import { useSelector } from 'react-redux'

import { CHART_THEME } from '../chartTheme'

type PieChartProps = {
    dataSource: {
        id: string
        label: string
        value: number
        color: string
    }[]
    margin?: {
        top?: number
        right?: number
        bottom?: number
        left?: number
    }
    innerRadius: number
    legends?: any
    colors?: any
}

const PieChart = ({
    dataSource,
    margin,
    innerRadius,
    legends,
    colors
}: PieChartProps) => {
    const { mode } = useSelector((state: any) => state.theme)

    return (
        <ResponsivePie
            data={dataSource}
            margin={margin}
            innerRadius={innerRadius}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]]
            }}
            colors={colors}
            legends={legends}
            theme={CHART_THEME[mode]}
        />
    )
}

export default PieChart
