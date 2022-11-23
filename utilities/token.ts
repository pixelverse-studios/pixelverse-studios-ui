import { ProfileProps } from './types/userTypes'
import { JWT_SECRET } from './constants'
import { initialState } from '../lib/redux/slices/user'
import jwtDecode from 'jwt-decode'

export const decodeCachedToken = (): ProfileProps => {
    const cachedToken = localStorage.getItem(JWT_SECRET)

    if (cachedToken) {
        const decoded: any = jwtDecode(cachedToken)

        if (decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem(JWT_SECRET)
            return initialState.profile
        }

        delete decoded.exp
        delete decoded.iat
        return decoded
    }

    return initialState.profile
}
