import gql from 'graphql-tag'

export const ADD_NEW_CLIENT = gql`
    mutation addNewClient($eventUri: String!, $inviteeUri: String!) {
        addNewClient(eventUri: $eventUri, inviteeUri: $inviteeUri) {
            id
            email
        }
    }
`
