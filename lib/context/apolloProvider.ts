import { setContext } from '@apollo/client/link/context'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { JWT_SECRET } from '../../utilities/constants'

const URI =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:5001/graphql'
        : 'https://seahorse-app-v88m6.ondigitalocean.app/graphql'
const httpLink = new HttpLink({ uri: URI })
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
