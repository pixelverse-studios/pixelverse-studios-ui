import jwtDecode from 'jwt-decode'

import { JWT_SECRET } from './constants'
import { initialState } from '../lib/redux/userSlice'

type InitialUserState = {
    id: number | null
    email: string
    password: string
    firstName: string
    lastName: string
    dob: Date | null
    height: number | null
    weight: number | null
    gender: string
    goalWeight: number | null
    bodyFat: number | null
    goalBodyFat: number | null
    activityLevel: string
    loggedIn: boolean
}

export const decodeToken = (): InitialUserState => {
    const existingToken = localStorage.getItem(JWT_SECRET)

    if (existingToken) {
        const decodedToken: any = jwtDecode(existingToken)
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem(JWT_SECRET)
            return initialState
        }
        delete decodedToken.exp
        delete decodedToken.iat
        return decodedToken
    }

    return initialState
}

export const decodeProvidedToken = (token: any): InitialUserState => {
    const decodedToken: any = jwtDecode(token)

    if (decodedToken.exp * 1000 < Date.now()) {
        return initialState
    }

    delete decodedToken.exp
    delete decodedToken.iat

    return decodedToken
}
