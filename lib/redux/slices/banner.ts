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
        }
    }
})

export const { showBanner, hideBanner } = bannerSlice.actions
export default bannerSlice.reducer
