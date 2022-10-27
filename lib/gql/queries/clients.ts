import gql from 'graphql-tag'

export const FETCH_ALL_CLIENTS = gql`
    query GetAllClients {
        getAllClients {
            id
            email
        }
    }
`
