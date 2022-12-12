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
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
export const RESET_PASSWORD = gql`
    mutation resetPassword($newPassword: String!, $confirmPassword: String!) {
        resetPassword(
            newPassword: $newPassword
            confirmPassword: $confirmPassword
        ) {
            ... on UserSuccess {
                _id
                email
                password
                firstName
                lastName
                token
            }
            ... on Errors {
                type
                message
            }
        }
    }
`

export const SEND_PASSWORD_RESET = gql`
    mutation sendResetPasswordEmail($email: String!) {
        sendPasswordResetEmail(email: $email) {
            ... on UserSuccess {
                _id
                email
                password
                firstName
                lastName
                token
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
