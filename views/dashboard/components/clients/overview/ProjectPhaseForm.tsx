import useForm from '../../../../../utilities/hooks/useForm'
import {
    DateField,
    FormRow,
    FormSubmitButton,
    CancelButton,
    TextField
} from '../../../../../components/form'
import FormValidations from '../../../../../utilities/validations/forms'
import { FormProps } from '../../../../../utilities/types/formTypes'
import styles from './ClientsOverview.module.scss'

const INITIAL_STATE = {
    originalCostEstimate: { value: null, error: '' },
    updatedCostEstimate: { value: null, error: '' },
    originalLaunchDate: { value: null, error: '' },
    updatedLaunchDate: { value: null, error: '' },
    status: { value: null, error: '' },
    notes: { value: null, error: '' },
    amountPaid: { value: null, errors: '' }
} as FormProps

const VALIDATIONS = {
    updatedCostEstimate: FormValidations.validFloat,
    originalCost: FormValidations.validFloat,
    originalLaunchDate: { test: () => true, message: '' },
    updatedLaunchDate: { test: () => true, message: '' },
    status: FormValidations.validAlphaNumeric,
    notes: FormValidations.validAlphaNumericWithSpaces,
    amountPaid: FormValidations.validFloat
}

const ProjectPhaseForm = ({
    onDrawerClose,
    clientID
}: {
    onDrawerClose: Function
    clientID: string
}) => {
    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )

    const loading = false

    const onCancelClick = (event: any) => {
        event.preventDefault()
        handleReset()
        onDrawerClose()
    }

    return (
        <form className={styles.phaseForm}>
            <fieldset>
                <FormRow>
                    <TextField
                        id="originalCostEstimate"
                        name="originalCostEstimate"
                        label="Original Cost Estimate"
                        type="number"
                        field={form.originalCostEstimate}
                        onChange={handleChange}
                    />
                    <DateField
                        id="originalLaunchDate"
                        name="originalLaunchDate"
                        label="Original Launch Date"
                        field={form.originalLaunchDate}
                        onChange={handleChange}
                        minDate={new Date()}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        id="status"
                        name="status"
                        label="Phase Status"
                        field={form.status}
                        onChange={handleChange}
                        type="text"
                    />
                    <TextField
                        id="notes"
                        name="notes"
                        label="Phase Notes"
                        type="textarea"
                        field={form.notes}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <TextField
                        id="amountPaid"
                        name="amountPaid"
                        label="Amount Paid"
                        type="number"
                        field={form.amountPaid}
                        onChange={handleChange}
                    />
                    {/* isActive field will be a switch */}
                </FormRow>
                <FormRow>
                    <FormSubmitButton
                        disabled={!isFormValid || loading}
                        label="Update"
                        loading={loading}
                    />
                    <CancelButton label="Cancel" onCancel={onCancelClick} />
                </FormRow>
            </fieldset>
        </form>
    )
}

export default ProjectPhaseForm
