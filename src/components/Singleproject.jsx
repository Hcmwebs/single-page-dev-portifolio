import React from 'react'

const SingleProject = ({
	id,
	title,
	imageLarge,
	imageSmall,
	live,
	code,
	skills,
}) => {
	return (
		<div className='project' key={id}>
			<picture>
				<source
					srcSet={imageLarge}
					media='(min-width: 768px)'
					type='image/webp'
				/>
				<source
					srcSet={imageSmall}
					media='(min-width: 300px) and (max-width:767px) '
					type='image/webp'
				/>
				<img src={imageSmall} alt={title} type='image/webp' />
			</picture>

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
