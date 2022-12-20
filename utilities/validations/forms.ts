import {
    VALID_EMAIL,
    VALID_ALPHA_STRING,
    VALID_ALPHA_NUMERIC,
    VALID_PASSWORD,
    VALID_ALPHA_NUMERIC_WITH_SPACES
} from './regex'

const validEmail = {
    test: (value: string) => VALID_EMAIL.test(value),
    message: 'Must containt a valid email address (example@test.com)'
}

const validAlphaString = {
    test: (value: string) => VALID_ALPHA_STRING.test(value),
    message: 'Field can only contain alpha characters'
}

const validAlphaNumeric = {
    test: (value: string) => VALID_ALPHA_NUMERIC.test(value),
    message: 'Field can only contain alpha numeric characters'
}

const validAlphaNumericWithSpaces = {
    test: (value: string) => VALID_ALPHA_NUMERIC_WITH_SPACES.test(value),
    message: 'Field can only contain alpha numeric characters & spaces'
}

const validPassword = {
    test: (value: string) => VALID_PASSWORD.test(value),
    message:
        'Password is required, and should include at least 1 lowercase & uppercase letter, 1 special character, 1 number, and be minimum 8 characters long.'
}

const FormValidations = {
    validEmail,
    validAlphaString,
    validAlphaNumeric,
    validAlphaNumericWithSpaces,
    validPassword
}
export default FormValidations
