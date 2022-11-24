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
<<<<<<< HEAD
export const RESET_PASSWORD = gql`
    mutation resetPassword($newPassword: String!, $confirmPassword: String!) {
        resetPassword(
            newPassword: $newPassword
            confirmPassword: $confirmPassword
        ) {
=======

export const SEND_PASSWORD_RESET = gql`
    mutation sendResetPasswordEmail($email: String!) {
        sendPasswordResetEmail(email: $email) {
>>>>>>> f8011884e17518d503170c35f01690326b0fe877
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
