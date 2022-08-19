import { setContext } from '@apollo/client/link/context'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { JWT_SECRET } from '../../utilities/constants'

const uri = 'http://localhost:5001'
const httpLink = new HttpLink({ uri })
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(JWT_SECRET)

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})
