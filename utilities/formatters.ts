import { format } from 'date-fns'

export const formatDate = (date: Date | null) => {
    if (date == null) return

    return format(new Date(date), 'MM/dd/YYY')
}
