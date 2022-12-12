import { createSlice } from '@reduxjs/toolkit'
import { ProfileProps } from '../../../utilities/types/userTypes'
import { JWT_SECRET } from '../../../utilities/constants'

export const logout = (dispatch: Function, router: any) => {
    dispatch(removeProfile())
    router.push('/')
    localStorage.removeItem(JWT_SECRET)
}

export const initialState = {
    profile: {
        _id: '',
        email: '',
        password: '',
        firstName: null,
        lastName: null,
        token: null
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
        },
        removeProfile: state => {
            state.profile = initialState.profile
        }
    }
})

export const { setLoading, setProfile, removeProfile } = userSlice.actions
export default userSlice.reducer
