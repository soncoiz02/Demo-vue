import { format } from 'date-fns'

export const formatDate = {
    methods: {
        formatDate(date) {
            if (date)
                return format(new Date(date), 'MMM dd, yyyy')
        },
        formatDate2(date) {
            if (date)
                return format(new Date(date), 'do MMMM yyyy')
        }
    },
}
