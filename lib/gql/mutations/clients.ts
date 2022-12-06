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
