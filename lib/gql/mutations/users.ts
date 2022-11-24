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
export const REGISTER = gql`
    mutation register(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
    ) {
        register(
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
        ) {
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
