import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    message: null,
    type: null,
    duration: null
} as {
    show: boolean
    message: string | null
    type: 'Errors' | 'UserSuccess' | 'ClientSuccess' | null
    duration?: 'permanant' | null
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        showBanner: (state, action) => {
            state.show = true
            state.message = action.payload.message
            state.type = action.payload.type
            if (action.payload.duration) {
                state.duration = action.payload.duration
            }
        },
        hideBanner: state => {
            state.show = false
            state.message = initialState.message
            state.type = initialState.type
            state.duration = initialState.duration
        },
        showTechnicalDifficultiesBanner: state => {
            state.show = true
            state.message =
                'We are experiencing technical difficulties. Please try again, or reach out for assistance at info@ezpzcoding.com'
            state.type = 'Errors'
        }
    }
})

export const { showBanner, hideBanner, showTechnicalDifficultiesBanner } =
    bannerSlice.actions
export default bannerSlice.reducer
