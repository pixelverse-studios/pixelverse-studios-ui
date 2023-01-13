import { createSlice } from '@reduxjs/toolkit'

import { DARK } from '../../../utilities/constants'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: DARK },
    reducers: {
        swapTheme: (state, action) => {
            state.mode = action.payload
        }
    }
})

export const { swapTheme } = themeSlice.actions
export default themeSlice.reducer
