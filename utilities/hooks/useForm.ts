import { ChangeEventHandler, useReducer, useState } from 'react'
import { FormProps, RegisterProps } from '../types/formTypes'

const RESET = 'reset'
const UPDATE = 'update'
interface ActionState {
    type: string
    payload?: any
}
function reducer(state: FormProps, action: ActionState) {
    switch (action.type) {
        case UPDATE: {
            const { name, value, error } = action.payload
            return { ...state, [name]: { value, error } }
        }
        case RESET: {
            return action.payload
        }

        default:
            return state
    }
}

const useForm = (initialState: FormProps, validations: RegisterProps) => {
    const [form, dispatch] = useReducer(reducer, initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target

        const error = !validations[name].test(value.trim())
            ? validations[name].message
            : ''
        dispatch({
            type: UPDATE,
            payload: {
                name,
                value,
                error
            }
        })
    }

    const handleReset = () => dispatch({ type: RESET, payload: initialState })
    const isFormValid = Object.keys(form).every(
        label => form[label].value && !form[label].error
    )

    return { form, handleChange, handleReset, isFormValid }
}

export default useForm
