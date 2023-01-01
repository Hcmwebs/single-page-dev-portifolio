import React from 'react'
import { StyledFlex, StyledLink, StyledProject } from '../styles'

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
		<StyledProject key={id}>
			<div className='overlay'>
				<StyledFlex className='links'>
					<StyledLink href={live} target='_blank' rel='noopener noreferrer'>
						{live}
					</StyledLink>
					<StyledLink href={code} target='_blank' rel='noopener noreferrer'>
						{code}
					</StyledLink>
				</StyledFlex>
			</div>
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
				<p>{skills}</p>
				<StyledFlex
					jc='space-between'
					align='center'
					width='100%'
					className='footer'>
					<StyledLink href={live} target='_blank' rel='noopener noreferrer'>
						{live}
					</StyledLink>
					<StyledLink href={code} target='_blank' rel='noopener noreferrer'>
						{code}
					</StyledLink>
				</StyledFlex>
			</div>
		</StyledProject>
	)
}

export default SingleProject
