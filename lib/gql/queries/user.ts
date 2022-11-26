import gql from 'graphql-tag'

export const GET_LOGGED_IN_USER = gql`
    query getLoggedInUser {
        getLoggedInUser {
            ... on UserSuccess {
                _id
                email
                password
                firstName
                lastName
                token
                passwordResetToken
                successType
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
