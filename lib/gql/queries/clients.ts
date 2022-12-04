import gql from 'graphql-tag'

export const FETCH_ALL_CLIENTS = gql`
    query GetAllClients {
        getAllClients {
            ... on ClientSuccess {
                _id
                email
                firstName
                lastName
                status
                meetings
                originalCostEstimate
                updatedCostEstimate
                project
                successType
            }
            ... on Errors {
                type
                messsage
            }
        }
    }
`
