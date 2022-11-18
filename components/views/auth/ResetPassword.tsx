import useForm from '../../../utilities/hooks/useForm'
import { FormProps } from '../../../utilities/types/formTypes'
import { VALID_PASSWORD } from '../../../utilities/validations/regexValidators'
import { FormRow, PasswordField } from '../../form'
import styles from './AuthPages.module.scss'

const ResetPassword = () => {
    return (
        <div className={styles.content}>
            <div className={styles.formContainer}>
                <h1 className={styles.header}>Reset Password</h1>
                <form>
                    <fieldset>
                        <FormRow>
                            <PasswordField />
                        </FormRow>
                        <FormRow>
                            <PasswordField message={true} />
                        </FormRow>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
