import { useState, ChangeEventHandler } from 'react'

const useForm = (
    initialState = {
        email: '',
        password: ''
    }
) => {
    const [input, setInput] = useState(initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name, type } = event.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleReset = () => {
        setInput(initialState)
    }

    const clearForm = () => {
        const blankForm = Object.fromEntries(
            Object.entries(input).map(([key]) => [key, ''])
        )
        setInput(blankForm)
    }

    return { input, handleChange, handleReset, clearForm }
}

export default useForm
