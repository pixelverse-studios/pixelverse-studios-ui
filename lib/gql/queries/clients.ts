import gql from 'graphql-tag'

export const FETCH_ALL_CLIENTS = gql`
    query getAllClients {
        getAllClients {
            ... on ClientSuccess {
                _id
                email
                firstName
                lastName
                meetings {
                    _id
                    location
                    url
                    scheduledFor
                    prepInfo {
                        answer
                        question
                    }
                }
                project {
                    title
                    domain
                    externalDependencies
                    phases {
                        _id
                        hoursLogged {
                            date
                            developer
                        }
                        originalCostEstimate
                        updatedCostEstimate
                        originalLaunchDate
                        updatedLaunchDate
                        status
                        notes
                        amountPaid
                    }
                }
                notes
                successType
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
