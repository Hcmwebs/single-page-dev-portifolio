import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { StyledForm, StyledFormGroup } from '../styles'
const formId = 'mzbqbynw'
const FormSpree = () => {
	const [state, handleSubmit] = useForm(formId)
	if (state.succeeded) {
		return <p>Thanks for joining!</p>
	}
	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledFormGroup>
				<label htmlFor='name'></label>
				<input id='name' type='name' name='name' />
				<ValidationError prefix='name' field='name' errors={state.errors} />
			</StyledFormGroup>
      
			<StyledFormGroup>
				<label htmlFor='email'></label>
				<input id='email' type='email' name='email' />
				<ValidationError prefix='Email' field='email' errors={state.errors} />
			</StyledFormGroup>

			<StyledFormGroup>
				<textarea id='message' name='message' />
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
			</StyledFormGroup>

			<button type='submit' disabled={state.submitting}>
				Submit
			</button>
		</StyledForm>
	)
}

export default FormSpree
