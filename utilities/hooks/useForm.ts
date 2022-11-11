import { useState, ChangeEventHandler } from 'react'

interface InitialStateProps {
    [key: string]: any
}

const useForm = (initialState: InitialStateProps = {}) => {
    const [input, setInput] = useState(initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleReset = () => setInput(initialState)

    const clearForm = () => {
        const blankForm = Object.fromEntries(
            Object.entries(input).map(([key]) => [key, ''])
        )
        setInput(blankForm)
    }

    return { input, handleChange, handleReset, clearForm }
}

export default useForm
