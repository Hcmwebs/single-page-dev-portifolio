import React from 'react'
import styled from 'styled-components'

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
		<Wrapper key={id}>
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
		</Wrapper>
	)
}
const Wrapper = styled.div`
width: min(100%, 343px);
min-height:450px;
display:grid;
place-items: center;

@media (min-width: 768px) {
	width: min(100%, 540px);
}
`

export default SingleProject
