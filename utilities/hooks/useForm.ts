import { ChangeEventHandler, useReducer } from 'react'
import { FormProps } from '../types/formTypes'
interface ActionState {
    type: string
    payload?: any
}
function reducer(state: FormProps, action: ActionState) {
    switch (action.type) {
        case 'handle_change': {
            const { name, value } = action.payload
            return { ...state, [name]: value }
        }
        case 'handle_reset': {
            return state
        }
        default:
            return state
    }
}

const useForm = (initialState: FormProps) => {
    const [input, dispatch] = useReducer(reducer, initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target
        dispatch({
            type: 'handle_change',
            payload: {
                name,
                value
            }
        })
    }

    const handleReset = () => dispatch({ type: 'handle_reset' })

    return { input, handleChange, handleReset }
}

export default useForm
