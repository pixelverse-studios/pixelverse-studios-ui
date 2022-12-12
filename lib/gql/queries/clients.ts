import gql from 'graphql-tag'

export const FETCH_ALL_CLIENTS = gql`
    query getAllClients {
        getAllClients {
            ... on MultipleClientSuccess {
                clients {
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
                        notes
                    }
                    project {
                        title
                        domain
                        externalDependencies
                        phases {
                            _id
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
                }
            }
            ... on Errors {
                type
                message
            }
        }
    }
`
