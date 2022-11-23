import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
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
