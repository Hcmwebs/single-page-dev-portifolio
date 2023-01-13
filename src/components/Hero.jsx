import React from 'react'
import profileSmall from '../assets/image-profile-mobile.webp'
import profileMedium from '../assets/image-profile-tablet.webp'
import profileLarge from '../assets/image-profile-desktop.webp'
import { StyledHero, StyledLink } from '../styles'

const Hero = () => {
	return (
		<StyledHero>
			<picture>
				<source srcSet={profileLarge} media='(min-width: 1440px)' />
				<source
					srcSet={profileMedium}
					media='(min-width: 768px) and (max-width:1439px) '
				/>
				<source
					srcSet={profileSmall}
					media='(min-width: 300px) and (max-width:767px) '
				/>

				<img src={profileSmall} alt='profile' />
			</picture>

			<div className='hero-body'>
				<h1>
					Nice to meet you! I'm
					<span className='title'>
						Adam Keyes.
						<div className='underline'></div>
					</span>
				</h1>
				<p>
					Based in the UK, I'm a front-end developer passionate about building
					accessible web apps that users love.
				</p>
				<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
					Contact me
				</StyledLink>
			</div>
		</StyledHero>
	)
}

export default Hero
