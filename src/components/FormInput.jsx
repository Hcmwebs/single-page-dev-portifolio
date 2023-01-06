import React, { useState } from 'react'

const FormInput = (props) => {
	const { label, id, handleChange, error, errorMessage, ...inputProps } = props

	const [focused, setFocused] = useState(false)

	const handleFocused = () => {
		setFocused(true)
	}

	return (
		<div className='form-group'>
			<input
				{...inputProps}
				aria-label={label}
				onChange={handleChange}
				onBlur={handleFocused}
				onFocus={() => inputProps.name === 'message' && setFocused(true)}
				focused={focused.toString()}
				className={`${error ? 'success' : 'error'}`}
			/>
			{!error && <span className='error'>{errorMessage} </span>}
		</div>
	)
}

export default FormInput
