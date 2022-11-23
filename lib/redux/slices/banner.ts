import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false as boolean,
    message: null as string | null,
    type: null as 'Errors' | 'UserSuccess' | 'ClientSuccess' | null
}

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        showBanner: (state, action) => {
            state.show = true
            state.message = action.payload.message
            state.type = action.payload.type
        },
        hideBanner: state => {
            state.show = false
            state.message = initialState.message
            state.type = initialState.type
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
