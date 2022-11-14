import { ChangeEventHandler, useReducer } from 'react'
import { FormProps } from '../types/formTypes'

const RESET = 'reset'
const UPDATE = 'update'
interface ActionState {
    type: string
    payload?: any
}
function reducer(state: FormProps, action: ActionState) {
    switch (action.type) {
        case UPDATE: {
            const { name, value } = action.payload
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

const useForm = (initialState: FormProps) => {
    const [form, dispatch] = useReducer(reducer, initialState)

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        let { value, name } = event.target
        dispatch({
            type: UPDATE,
            payload: {
                name,
                value
            }
        })
    }

    const handleReset = () => dispatch({ type: RESET, payload: initialState })

    return { form, handleChange, handleReset }
}

export default useForm
