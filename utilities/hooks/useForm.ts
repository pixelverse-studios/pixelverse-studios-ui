import { useState, ChangeEventHandler } from 'react'
import { FormProps } from '../types/formTypes'

const useForm = (initialState: FormProps) => {
    const [input, setInput] = useState(initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleReset = () => setInput(initialState)

    return { input, handleChange, handleReset }
}

export default useForm
