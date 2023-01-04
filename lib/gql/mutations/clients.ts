import gql from 'graphql-tag'

export const SET_CLIENT_MEETING = gql`
    mutation setClientMeetings($eventUri: String!, $inviteeUri: String!) {
        setClientMeetings(eventUri: $eventUri, inviteeUri: $inviteeUri) {
            ... on ClientSuccess {
                _id
            }
            ... on Errors {
                type
                message
            }
        }
    }
`

export const EDIT_CLIENT_PROJECT_TITLE = gql`
    mutation EditClientProjectTitle($clientID: ID!, $title: String) {
        editClientProject(clientID: $clientID, title: $title) {
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
                            isActive
                        }
                    }
                    notes
                }
            }
            ... on Errors {
                type
                message
                errors {
                    field
                    message
                }
            }
        }
    }
`
