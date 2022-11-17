export type inputType = { value: string; error: string }
type validationType = { test: (value: string) => boolean; message: string }

type RegisterFormProps = {
    firstName: inputType
    lastName: inputType
    email: inputType
    password: inputType
}

type RegisterValidationProps = {
    [firstName: string]: validationType
    lastName: validationType
    email: validationType
    password: validationType
}

type LoginFormProps = {
    email: inputType
    password: inputType
}

type LoginValidationProps = {
    [email: string]: validationType
    password: validationType
}

export type RegisterProps = RegisterValidationProps | LoginValidationProps
export type FormProps = RegisterFormProps | LoginFormProps
