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
<<<<<<< HEAD
	const [focused, setFocused] = useState(false)

	const handleFocused = () => {
		setFocused(true)
	}
=======
	const [errorMessage, setErrorMessage] = useState('')
>>>>>>> 647e9bcf13009aa8f3972175be70e59b9916f32f

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
		}
<<<<<<< HEAD
=======
		if (!contact.name) {
			setError(true)
			setErrorMessage('Please enter your name')
		}
		if (!contact.email) {
			setError(true)
			setErrorMessage('Sorry, invalid format here')
		}
		if (!contact.message) {
			setError(true)
			setErrorMessage('Please, how can I be of your service?')
		}
>>>>>>> 647e9bcf13009aa8f3972175be70e59b9916f32f
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
						placeholder='Name'
						aria-label='name'
						value={contact.name}
						onChange={handleChange}
<<<<<<< HEAD
						onFocus={() => setFocused(true)}
						onBlur={handleFocused}
						focused={focused.toString()}
						required
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>Please, provide a name!</span>}
=======
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>{errorMessage}</span>}
>>>>>>> 647e9bcf13009aa8f3972175be70e59b9916f32f
				</div>

				<div className='form-group'>
					<input
						type='email'
						name='email'
						id='email'
						placeholder=' Email'
						aria-label='email'
						error={() => setError('Sorry, invalid format here')}
						required
						value={contact.email}
						onChange={handleChange}
<<<<<<< HEAD
						onBlur={handleFocused}
						onFocus={() => setFocused(true)}
						focused={focused.toString()}
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>Sorry, invalid format here</span>}
=======
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>{errorMessage}</span>}
>>>>>>> 647e9bcf13009aa8f3972175be70e59b9916f32f
				</div>
				<div className='form-group'>
					<textarea
						name='message'
						id='message'
						placeholder='Message'
						aria-label='message'
<<<<<<< HEAD
						value={contact.message}
						onChange={handleChange}
						onFocus={() => contact.name === 'message' && setFocused(true)}
						onBlur={handleFocused}
						focused={focused.toString()}
						required
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'> Please how can I help?</span>}
=======
						error={() => setError('Please how can I help?')}
						value={contact.message}
						onChange={handleChange}
					/>
					{error && <CgDanger className='icon' />}
					{error && <span className='error'>{errorMessage}</span>}
>>>>>>> 647e9bcf13009aa8f3972175be70e59b9916f32f
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
