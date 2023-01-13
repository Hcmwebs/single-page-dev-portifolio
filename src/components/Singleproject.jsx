import React from 'react'
import { StyledFlex, StyledLink, Styledproject } from '../styles'

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
		<Styledproject key={id}>
			<div className='overlay'>
				<StyledFlex className='links'>
					<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
						{live}
					</StyledLink>
					<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
						{code}
					</StyledLink>
				</StyledFlex>
			</div>
			<picture>
				<source srcSet={imageLarge} media='(min-width: 768px)' />
				<source
					srcSet={imageSmall}
					media='(min-width: 300px) and (max-width:767px) '
				/>
				<img src={imageSmall} alt={title} />
			</picture>

			<div className='cardBody'>
				<h2>{title}</h2>
				<p>{skills}</p>
				<StyledFlex jc='space-between' align='center' className='footer'>
					<StyledLink href='#' target='_blank' rel='noopener noreferrer' className='projects-link'>
						{live}
					</StyledLink>
					<StyledLink href='#' target='_blank' rel='noopener noreferrer' className='projects-link'>
						{code}
					</StyledLink>
				</StyledFlex>
			</div>
		</Styledproject>
	)
}

export default SingleProject
