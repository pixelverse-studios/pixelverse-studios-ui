import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    clients: [],
    loadingAllClients: false as boolean
}

export const allClientsSlice = createSlice({
    name: 'allClients',
    initialState,
    reducers: {
        setClients: (state, action) => {
            state.loadingAllClients = false
            state.clients = action.payload
        },
        setLoadingAllClients: (state, action) => {
            state.loadingAllClients = action.payload
        }
    }
})

export const { setLoadingAllClients, setClients } = allClientsSlice.actions

export default allClientsSlice.reducer
