export const setColor = (field: {
    value: string
    error: string
}): 'primary' | 'error' | 'success' => {
    if (field.value === '' && field.error === '') {
        return 'primary'
    }

    if (field.error) {
        return 'error'
    }

    if (field.value && !field.error) {
        return 'success'
    }

    return 'primary'
}
