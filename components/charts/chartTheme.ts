interface themeType {
    [key: string]: {
        // background: string
    }
}

export const CHART_THEME = {
    light: {
        background: '#d0d0d0',
        textColor: '#151419',
        fontSize: 15,
        grid: {
            line: {
                stroke: '#1f1e24'
            }
        },
        legends: {
            title: { text: { fontSize: 14, fill: '#1f1e24' } },
            text: { fontSize: 14, fill: '#1f1e24' }
        },
        tooltip: {
            container: { background: '#e8e8e8', color: '#1f1e24', fontSize: 12 }
        }
    },
    dark: {
        background: '#151419',
        textColor: '#d0d0d0',
        fontSize: 15,
        grid: {
            line: {
                stroke: '#e8e8e8'
            }
        },
        legends: {
            title: { text: { fontSize: 14, fill: '#d0d0d0' } },
            text: { fontSize: 14, fill: '#e8e8e8' }
        },
        tooltip: {
            container: { background: '#1f1e24', color: '#d0d0d0', fontSize: 12 }
        }
    }
} as themeType
