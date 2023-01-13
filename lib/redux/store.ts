import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import allUsersReducer from './slices/allUsers'
import allClientsReducer from './slices/allClients'
import bannerReducer from './slices/banner'
import developerHoursReducer from './slices/developerHours'
import themeReducer from './slices/theme'

export const store = configureStore({
    reducer: {
        user: userReducer,
        allUsers: allUsersReducer,
        allClients: allClientsReducer,
        banner: bannerReducer,
        developerHours: developerHoursReducer,
        theme: themeReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
