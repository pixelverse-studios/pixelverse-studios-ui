import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

const ContactUs = () => {
    const onEventScheduled = (e: any) => {
        console.log(e)
    }

    useCalendlyEventListener({
        onEventScheduled: onEventScheduled
    })

    return (
        // <CalendlyEventListener onEventScheduled={onEventScheduled}>
        <InlineWidget
            styles={{ height: '100vh' }}
            url="https://calendly.com/ezpzcoding"
        />
        // </CalendlyEventListener>
    )
}

export default ContactUs
