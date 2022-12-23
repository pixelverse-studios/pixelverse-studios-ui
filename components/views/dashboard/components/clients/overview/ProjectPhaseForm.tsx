import { format } from 'date-fns'

import useForm from '../../../../../../utilities/hooks/useForm'
import {
    NumberField,
    DateField,
    FormRow,
    SubmitButton,
    CancelButton
} from '../../../../../form'
import FormValidations from '../../../../../../utilities/validations/forms'
import { FormProps } from '../../../../../../utilities/types/formTypes'
import styles from './ClientsOverview.module.scss'

const INITIAL_STATE = {
    originalCostEstimate: { value: null, error: '' },
    updatedCostEstimate: { value: null, error: '' },
    originalLaunchDate: { value: null, error: '' },
    updatedLaunchDate: { value: null, error: '' }
} as FormProps

const VALIDATIONS = {
    updatedCostEstimate: FormValidations.validFloat,
    originalCost: FormValidations.validFloat,
    originalLaunchDate: { test: () => true, message: '' },
    updatedLaunchDate: { test: () => true, message: '' }
}

const ProjectPhaseForm = () => {
    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )

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
                        disabled
                    />
                    <NumberField
                        theme="light"
                        id="updatedCostEstimate"
                        name="updatedCostEstimate"
                        placeholder="New Cost Estimate"
                        field={form.updatedCostEstimate}
                        onChange={handleChange}
                    />
                </FormRow>
                <FormRow>
                    <DateField
                        theme="light"
                        id="originalLaunchDate"
                        name="originalLaunchDate"
                        placeholder="Original Launch Date"
                        field={form.originalLaunchDate}
                        onChange={handleChange}
                        disabled
                        displayFormat="MM/dd/yyyy"
                    />
                    <DateField
                        theme="light"
                        id="updatedLaunchDate"
                        name="updatedLaunchDate"
                        placeholder="New Launch Date"
                        field={form.updatedLaunchDate}
                        onChange={handleChange}
                        displayFormat="MM/dd/yyyy"
                        minimumDate={new Date()}
                    />
                </FormRow>
            </fieldset>
        </form>
    )
}

export default ProjectPhaseForm
