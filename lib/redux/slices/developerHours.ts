import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    devHours: [],
    loadingDevHours: false as boolean
}

export const developersHoursSlice = createSlice({
    name: 'developerHours',
    initialState,
    reducers: {
        setDevelopers: (state, action) => {
            state.loadingDevHours = false
            state.devHours = action.payload
        },
        setLoadingDevHours: (state, action) => {
            state.loadingDevHours = action.payload
        }
    }
})

export const { setLoadingDevHours, setDevelopers } =
    developersHoursSlice.actions
export default developersHoursSlice.reducer
