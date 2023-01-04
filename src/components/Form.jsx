import React from 'react'
import { StyledButton, StyledForm, StyledFormWrapper } from '../styles'

const Form = () => {
	return (
		<StyledFormWrapper>
			<div className='intro'>
				<h2>Contact</h2>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<StyledForm>
				<div className='form-group'>
					<input type='text' name='Name' id='name' placeholder='Name' aria-label="name" />
				</div>
				<div className='form-group'>
					<input type='email' name='email' id='email' placeholder=' Email' aria-label="email"/>
				</div>
				<div className='form-group'>
					<textarea name='message' id='message' placeholder='Message' aria-label="message"/>
				</div>
				<StyledButton type='submit' className='submit'>
					Send message
				</StyledButton>
			</StyledForm>
		</StyledFormWrapper>
	)
}

export default Form
