import { setContext } from '@apollo/client/link/context'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { JWT_SECRET } from '../../utilities/constants'

const httpLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_SERVER_HOST })
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
