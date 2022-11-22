import { createSlice } from '@reduxjs/toolkit'

interface ProfileProps {
    _id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    token: string | null
    passwordResetToken: string | null
}

const initialState = {
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
