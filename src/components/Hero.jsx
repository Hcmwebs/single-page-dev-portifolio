import React from 'react'
import profileSmall from '../assets/image-profile-mobile.webp'
import profileMedium from '../assets/image-profile-tablet.webp'
import profileLarge from '../assets/image-profile-desktop.webp'
import { StyledHero, StyledTitle } from '../styles'

const Hero = () => {
	return (
		<StyledHero>
			<picture>
				<source
					srcSet={profileLarge}
					media='(min-width: 1440px)'
					type='image/webp'
				/>
				<source
					srcSet={profileMedium}
					media='(min-width: 768px) and (max-width:1439px) '
					type='image/webp'
				/>
				<source
					srcSet={profileSmall}
					media='(min-width: 300px) and (max-width:767px) '
					type='image/webp'
				/>

				<img src={profileSmall} alt='profile' type='image/webp' />
			</picture>

			<div className='hero-body'>
				<h1>
					Nice to meet you! I'm
					<StyledTitle>
						<h1>Adam Keyes.</h1>
						<div className='underline'></div>
					</StyledTitle>
				</h1>
				<p>
					Based in the UK, I'm a front-end developer passionate about building
					accessible web apps that users love.
				</p>
				<a href='#' target='_blank' rel='noopener noreferrer' className='btn'>
					Contact me
				</a>
			</div>
		</StyledHero>
	)
}

export default Hero
