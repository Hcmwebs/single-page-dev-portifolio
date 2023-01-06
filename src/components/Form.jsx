import React, { useState } from 'react'
import { inputs } from '../data/Data'
import { FormInput } from './index'
import {
	StyledButton,
	StyledForm,
	StyledFormWrapper,
	StyledTitle,
} from '../styles'

const Form = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value

		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		
	}
	return (
		<StyledFormWrapper>
			<div className='intro'>
				<StyledTitle>
					<h2>Contact</h2>
				</StyledTitle>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<StyledForm onSubmit={handleSubmit}>
				{inputs.map((input) => {
					return (
						<FormInput
							key={input.id}
							{...input}
							values={values[input.name]}
							onChange={handleChange}
							error={error}
						/>
					)
				})}

				{/* <div className='form-group error'>
					<input
						type='text'
						name='Name'
						id='name'
						placeholder='Name'
						aria-label='name'
					/>
					<span className='error'>Error message </span>
				</div>

				<div className='form-group'>
					<input
						type='email'
						name='email'
						id='email'
						placeholder=' Email'
						aria-label='email'
						required
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='message'
						id='message'
						placeholder='Message'
						aria-label='message'
					/>
				</div> */}
				<StyledButton type='submit' className='submit'>
					Send message
				</StyledButton>
			</StyledForm>
		</StyledFormWrapper>
	)
}

export default Form
