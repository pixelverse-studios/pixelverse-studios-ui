export interface ProfileProps {
    _id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    token: string | null
    passwordResetToken: string | null
}
