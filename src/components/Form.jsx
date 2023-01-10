import React, { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import { FormIntro, Button, FormSpree } from './index'
import { StyledForm, StyledFormGroup, StyledFormWrapper } from '../styles'

const Form = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [contacts, setContacts] = useState([])
	const [error, setError] = useState(false)
	const [focused, setFocused] = useState(false)

	const handleFocused = () => {
		setFocused(true)
	}

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setContact({ ...contact, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (contact.name && contact.email && contact.message) {
			setError(false)
			const newContact = { ...contact, id: new Date().getTime().toString() }
			setContacts([...contacts, newContact])
			setContact({ name: '', email: '', message: '' })
			setFocused(false)
		} else {
			setError(true)
		}
	}

	return (
		<StyledFormWrapper>
			<FormIntro />
      <FormSpree />
			<StyledForm
				onSubmit={handleSubmit}
				action='https://formspree.io/f/mzbqbynw'
				method='POST'>
				<StyledFormGroup>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='name'
						aria-label='name'
						value={contact.name}
						onChange={handleChange}
						onBlur={handleFocused}
						focused={focused.toString()}
						required
						className='input'
					/>

					{!error && <CgDanger className='icon' />}
					{!error && <span className='error'>Sorry, name is required!</span>}
				</StyledFormGroup>
				<StyledFormGroup>
					<input
						type='email'
						name='email'
						id='email'
						placeholder=' email'
						aria-label='email'
						required
						value={contact.email}
						onChange={handleChange}
						onBlur={handleFocused}
						focused={focused.toString()}
						className='input'
					/>
					{!error && <CgDanger className='icon' />}
					{!error && <span className='error'>Sorry, invalid format here</span>}
				</StyledFormGroup>
				<StyledFormGroup>
					<textarea
						type='text'
						name='message'
						id='message'
						placeholder='message'
						aria-label='message'
						value={contact.message}
						onChange={handleChange}
						onBlur={handleFocused}
						onFocus={() => {
							contact.name === 'message' && setFocused(true)
						}}
						focused={focused.toString()}
						required
						className='textArea'
					/>
					{!error && <CgDanger className='icon' />}
					{!error && <span className='error'> Please how can I help?</span>}
				</StyledFormGroup>
				<Button />
			</StyledForm>


		</StyledFormWrapper>
	)
}

export default Form
