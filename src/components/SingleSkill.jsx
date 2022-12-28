import React from 'react'

const SingleSkill = ({ title, experience }) => {
	return (
		<div className='single-item'>
			<h2>{title}</h2>
			<p>{experience}</p>
		</div>
	)
}

export default SingleSkill
