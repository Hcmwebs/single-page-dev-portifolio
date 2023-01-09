import React, { useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import {
	StyledButton,
	StyledForm,
	StyledFormWrapper,
	StyledTitle,
} from '../styles'

const Form = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [contacts, setContacts] = useState([])
	const [error, setError] = useState(true)

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
		console.log(contact)
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
				<div className='form-group'>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='name'
						aria-label='name'
						value={contact.name}
						onChange={handleChange}
						onBlur={handleFocused}
						onFocus={() => contact.name === 'name' && setFocused(true)}
						focused={focused.toString()}
						required
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>Sorry, name is required!</span>}
				</div>
				<div className='form-group'>
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
						onFocus={() => contact.name === 'email' && setFocused(true)}
						focused={focused.toString()}
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>Sorry, invalid format here</span>}
				</div>
				<div className='form-group'>
					<textarea
						type='text'
						name='message'
						id='message'
						placeholder='message'
						aria-label='message'
						value={contact.message}
						onChange={handleChange}
						onBlur={handleFocused}
						onFocus={() => contact.name === 'message' && setFocused(true)}
						focused={focused.toString()}
						required
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'> Please how can I help?</span>}
				</div>

				<StyledButton type='submit' className='submit'>
					Send message
				</StyledButton>
			</StyledForm>

			{contacts.map((contact) => {
				const { id, name, email, message } = contact
				return (
					<div key={id}>
						<h4>{name}</h4>
						<h5>{email}</h5>
						<p>{message}</p>
					</div>
				)
			})}
		</StyledFormWrapper>
	)
}

export default Form
