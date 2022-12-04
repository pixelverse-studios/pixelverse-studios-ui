import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    projects: [],
    loadingAllProjects: false as boolean
}

export const allProjectsSlice = createSlice({
    name: 'allProjects',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.loadingAllProjects = false
            state.projects = action.payload
        },
        setLoadingAllProjects: (state, action) => {
            state.loadingAllProjects = action.payload
        }
    }
})

export const { setLoadingAllProjects, setProjects } = allProjectsSlice.actions

export default allProjectsSlice.reducer
