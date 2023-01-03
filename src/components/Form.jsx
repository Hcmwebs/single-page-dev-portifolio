import React from 'react'

const Form = () => {
	return (
		<div>
			<div className='intro'>
				<h2>Contact</h2>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<form>
				<div className='form-group'>
					<input type='text' name='Name' id='name' />
				</div>
        <button type='submit'>Send Message</button>
			</form>
		</div>
	)
}

export default Form
