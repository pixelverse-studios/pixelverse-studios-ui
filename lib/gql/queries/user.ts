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
                devHours {
                    date
                    hoursLogged
                    project
                    projectPhase
                }
            }
            ... on Errors {
                type
                message
            }
        }
    }
`

export const GET_ALL_USERS = gql`
    query Query {
        getAllUsers {
            ... on MultipleUsersSuccess {
                users {
                    _id
                    email
                    password
                    firstName
                    lastName
                    token
                    devHours {
                        date
                        hoursLogged
                        project
                        projectPhase
                    }
                }
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
