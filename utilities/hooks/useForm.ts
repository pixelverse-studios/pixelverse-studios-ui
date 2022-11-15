import { ChangeEventHandler, useReducer, useState } from 'react'
import { ErrorProps, FormProps, RegisterProps } from '../types/formTypes'

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
            console.log(error)
            return { ...state, [name]: value }
        }
        case RESET: {
            const { initialState } = action.payload
            return initialState
        }

        default:
            return state
    }
}

const useForm = (
    initialState: FormProps,
    validation,
    initialError: ErrorProps
) => {
    const [form, dispatch] = useReducer(reducer, initialState)
    const [error, setError] = useState(initialError)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target

        if (validation[name]) {
            if (!validation[name](value)) {
                setError({
                    hasError: true,
                    fieldName: name
                })
            } else {
                setError(initialError)
            }
        }
        dispatch({
            type: UPDATE,
            payload: {
                name,
                value,
                error: {
                    error
                }
            }
        })
    }

    const handleReset = () => dispatch({ type: RESET, payload: initialState })

    return { form, error, handleChange, handleReset }
}

export default useForm
