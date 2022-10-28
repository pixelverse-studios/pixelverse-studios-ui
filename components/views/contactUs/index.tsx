import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { useMutation } from '@apollo/client'

import { ADD_NEW_CLIENT } from '../../../lib/gql/mutations/clients'

const ContactUs = () => {
    const [addNewClient] = useMutation(ADD_NEW_CLIENT, {
        onCompleted(data) {
            console.log(data)
            // handle success
        },
        onError(err) {
            console.log(err)
            // display error banner
        }
    })

    const onEventScheduled = (e: any) => {
        addNewClient({
            variables: {
                eventUri: e.data.payload.event.uri,
                inviteeUri: e.data.payload.invitee.uri
            }
        })
    }

    useCalendlyEventListener({
        onEventScheduled: onEventScheduled
    })

    return <InlineWidget url="https://calendly.com/ezpzcoding" />
}

export default ContactUs
