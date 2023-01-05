import React from 'react'

const FormInput = (props) => {
	const { label, id, handleChange, error, ...inputs } = props
	return (
		<div className='form-group'>
			<input
				type='text'
				name='Name'
				id='name'
				placeholder='Name'
				aria-label='name'
			/>
			<span>Error message </span>
		</div>
	)
}

export default FormInput
