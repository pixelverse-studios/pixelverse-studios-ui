import { createSlice } from '@reduxjs/toolkit'
import { ProfileProps } from '../../../utilities/types/userTypes'

export const initialState = {
    profile: {
        _id: '',
        email: '',
        password: '',
        firstName: null,
        lastName: null,
        token: null,
        passwordResetToken: null
    } as ProfileProps,
    loading: false as boolean
}

export const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.loading = false
            state.profile = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading, setProfile } = userSlice.actions
export default userSlice.reducer
