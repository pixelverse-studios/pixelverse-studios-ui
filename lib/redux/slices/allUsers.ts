import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    users: [],
    loadingAllUsers: false as boolean
}

export const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.loadingAllUsers = false
            state.users = action.payload
        },
        setLoadingAllUsers: (state, action) => {
            state.loadingAllUsers = action.payload
        }
    }
})

export const { setLoadingAllUsers, setUsers } = allUsersSlice.actions
export default allUsersSlice.reducer
