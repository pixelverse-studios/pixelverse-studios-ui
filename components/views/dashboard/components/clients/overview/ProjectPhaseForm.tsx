import { format } from 'date-fns'

import useForm from '../../../../../../utilities/hooks/useForm'
import {
    NumberField,
    DateField,
    FormRow,
    TextareaField,
    SubmitButton,
    CancelButton,
    StringField
} from '../../../../../form'
import FormValidations from '../../../../../../utilities/validations/forms'
import { FormProps } from '../../../../../../utilities/types/formTypes'
import styles from './ClientsOverview.module.scss'
import { useEffect } from 'react'

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
                    <NumberField
                        theme="light"
                        id="originalCostEstimate"
                        name="originalCostEstimate"
                        placeholder="Original Cost Estimate"
                        field={form.originalCostEstimate}
                        onChange={handleChange}
                    />
                    <DateField
                        theme="light"
                        id="originalLaunchDate"
                        name="originalLaunchDate"
                        placeholder="Original Launch Date"
                        field={form.originalLaunchDate}
                        onChange={handleChange}
                        displayFormat="MM/dd/yyyy"
                        minimumDate={new Date()}
                    />
                </FormRow>
                <FormRow>
                    <StringField
                        theme="light"
                        id="status"
                        name="status"
                        placeholder="Phase Status"
                        field={form.status}
                        onChange={handleChange}
                        type="text"
                    />
                    <TextareaField
                        theme="light"
                        id="notes"
                        name="notes"
                        placeholder="Phase Notes"
                        field={form.notes}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <NumberField
                        theme="light"
                        id="amountPaid"
                        name="amountPaid"
                        placeholder="Amount Paid"
                        field={form.amountPaid}
                        onChange={handleChange}
                    />
                    {/* isActive field will be a switch */}
                </FormRow>
                <FormRow>
                    <SubmitButton
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
