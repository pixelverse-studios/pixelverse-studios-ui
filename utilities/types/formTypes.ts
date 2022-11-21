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

type ResetPasswordProps = {
    newPassword: inputType
    confirmPassword: inputType
}

type ResetValidationProps = {
    [newPassword: string]: validationType
    confirmPassword: validationType
}

type ForgotPasswordProps = {
    email: inputType
}

type ForgotValidationProps = {
    [email: string]: validationType
}

export type RegisterProps =
    | RegisterValidationProps
    | LoginValidationProps
    | ResetValidationProps
    | ForgotValidationProps

export type FormProps =
    | RegisterFormProps
    | LoginFormProps
    | ResetPasswordProps
    | ForgotPasswordProps
