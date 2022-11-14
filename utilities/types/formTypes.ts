type RegisterFormProps = {
    firstName: string
    lastName: string
    email: string
    password: string
}

type LoginFormProps = {
    email: string
    password: string
}

export type FormProps = LoginFormProps | RegisterFormProps
