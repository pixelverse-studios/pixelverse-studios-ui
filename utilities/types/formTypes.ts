type RegisterFormProps = {
    firstName: string
    lastName: string
    email: string
    password: string
}

type RegisterValidationProps = {
    firstName: () => boolean
    lastName: () => boolean
    email: () => boolean
    password: () => boolean
}

type LoginFormProps = {
    email: string
    password: string
}

type FormErrorProps = {
    hasError: boolean
    fieldName: string
}

export type RegisterProps = RegisterValidationProps

export type FormProps = LoginFormProps | RegisterFormProps
export type ErrorProps = FormErrorProps
