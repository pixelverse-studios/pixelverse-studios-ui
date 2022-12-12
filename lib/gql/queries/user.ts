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
<<<<<<< HEAD
            }
        }
    }
`

export const GET_DEV_HOURS = gql`
    query getDeveloperHours {
        getDeveloperHours {
            ... on DeveloperHoursSuccess {
                developers {
                    _id
                    name
                    totalHours
                    data {
                        date
                        hoursLogged
                        project
                        projectPhase
                    }
                }
                projects {
                    projectPhase
                    devs {
                        name
                        totalHours
                    }
                }
                totalHours
            }
            ... on Errors {
                type
                message
=======
>>>>>>> UI-1.3.0
            }
        }
    }
`
