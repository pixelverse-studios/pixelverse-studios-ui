import { useState, FormEvent, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'

import {
    showBanner,
    showTechnicalDifficultiesBanner
} from '../../../../../../lib/redux/slices/banner'
import { EDIT_CLIENT_PROJECT_TITLE } from '../../../../../../lib/gql/mutations/clients'
import useForm from '../../../../../../utilities/hooks/useForm'
import { FormProps } from '../../../../../../utilities/types/formTypes'
import FormValidations from '../../../../../../utilities/validations/forms'
import {
    FormRow,
    TextField,
    FormSubmitButton,
    CancelButton
} from '../../../../../form'
import { setClients } from '../../../../../../lib/redux/slices/allClients'

const INITIAL_STATE = {
    projectTitle: { value: '', error: '' }
} as FormProps

const VALIDATIONS = {
    projectTitle: FormValidations.validAlphaNumericWithSpaces
}

const ProjectTitleForm = ({
    onDrawerClose,
    clientID
}: {
    onDrawerClose: Function
    clientID: string
}) => {
    const dispatch = useDispatch()

    const { form, handleChange, handleReset, isFormValid } = useForm(
        INITIAL_STATE,
        VALIDATIONS
    )
    const [loading, setLoading] = useState<boolean>(false)
    const [closeDrawer, setCloseDrawer] = useState<boolean>(false)

    useEffect(() => {
        if (closeDrawer) {
            setTimeout(() => onDrawerClose(), 1000)
        }
    }, [closeDrawer])

    const [EditClientProjectTitle] = useMutation(EDIT_CLIENT_PROJECT_TITLE, {
        onCompleted({ editClientProject: data }) {
            if (data.__typename === 'Errors') {
                dispatch(
                    showBanner({
                        message: data.message,
                        type: data.__typename
                    })
                )
            } else {
                dispatch(setClients(data.clients))
                setLoading(false)
                dispatch(
                    showBanner({
                        message: 'Client project title updated successfully',
                        type: data.__typename
                    })
                )
                setCloseDrawer(true)
            }
        },
        onError() {
            setLoading(false)
            dispatch(showTechnicalDifficultiesBanner())
        },
        variables: {
            clientID,
            title: form.projectTitle.value
        }
    })

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        EditClientProjectTitle()
    }

    const onCancelClick = (event: any) => {
        event.preventDefault()
        handleReset()
        onDrawerClose()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset>
                <FormRow>
                    <TextField
                        field={form.projectTitle}
                        type="text"
                        name="projectTitle"
                        id="projectTitle"
                        label="Project Title"
                        onChange={handleChange}
                    />
                </FormRow>
            </fieldset>
            <FormRow>
                <FormSubmitButton
                    disabled={!isFormValid || loading}
                    label="Update"
                    loading={loading}
                />
                <CancelButton label="Cancel" onCancel={onCancelClick} />
            </FormRow>
        </form>
    )
}

export default ProjectTitleForm
