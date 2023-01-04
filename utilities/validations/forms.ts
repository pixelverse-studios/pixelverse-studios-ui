import { isAfter } from 'date-fns'
import {
    VALID_EMAIL,
    VALID_ALPHA_STRING,
    VALID_ALPHA_NUMERIC,
    VALID_PASSWORD,
    VALID_ALPHA_NUMERIC_WITH_SPACES,
    VALID_FLOATS
} from './regex'

const validEmail = {
    test: (value: string) => VALID_EMAIL.test(value),
    message: 'Must containt a valid email address (example@test.com)'
}

const validFloat = {
    test: (value: any) => VALID_FLOATS.test(value), // any because type NUMBER kept giving me an error about some BS for type STRING. So will revisit later.
    message: 'Must only contain numbers and have no more than 2 decimal points'
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
    validPassword,
    validFloat
}
export default FormValidations
