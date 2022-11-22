import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface ProfileProps {
    _id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    token: string | null
    passwordResetToken: string | null
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (variables: any, thunkAPI) => {
        const { email, password, login } = variables
        const { data, loading, error } = await login({
            variables: { email, password }
        })
        const profile = data.login

        return { data: profile, loading, error } as any
    }
)

interface initialStateProps {
    profile: {
        _id: string
        email: string
        password: string
        firstName: string | null
        lastName: string | null
        token: string | null
        passwordResetToken: string | null
    }
    loading: boolean
    error: string | null | undefined
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
    loading: false as boolean,
    error: null as string | null | undefined
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
