import { VALID_EMAIL, VALID_ALPHA_STRING, VALID_PASSWORD } from './regex'

const validEmail = {
    test: (value: string) => VALID_EMAIL.test(value),
    message: 'Must containt a valid email address (example@test.com)'
}

const validAlphaString = {
    test: (value: string) => VALID_ALPHA_STRING.test(value),
    message: 'Field can only contain alpha characters'
}

const validPassword = {
    test: (value: string) => VALID_PASSWORD.test(value),
    message:
        'Password is required, and should include at least 1 lowercase & uppercase letter, 1 special character, 1 number, and be minimum 8 characters long.'
}

const FormValidations = {
    validEmail,
    validAlphaString,
    validPassword
}
export default FormValidations
