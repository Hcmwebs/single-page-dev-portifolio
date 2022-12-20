import React from 'react'

const SingleProject = ({id,title,imageLarge,live,code,skills}) => {
	return (
		<div className='project' key={id}>
			<img src={imageLarge} alt={title} />
			<div className='cardBody'>
				<h2>{title}</h2>
				<p className='skills'>{skills}</p>
			</div>
			<div className='cardFooter'>
				<div className='links'>
					<a
						href={live}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'>
						{live}
					</a>
					<a
						href={code}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'>
						{code}
					</a>
				</div>
			</div>
		</div>
	)
}

export default SingleProject
