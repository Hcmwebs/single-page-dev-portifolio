import React from 'react'
import profileSmall from '../assets/image-profile-mobile.webp'
import profileMedium from '../assets/image-profile-tablet.webp'
import profileLarge from '../assets/image-profile-desktop.webp'
import { StyledHero } from '../styles'

const Hero = () => {
	return (
		<StyledHero>
			<div className='hero-header'>
				<picture>
					<source srcset={profileLarge} media='(min-width: 1440px)' />
					<source srcset={profileMedium} media='(min-width: 768px)' />
					<source srcset={profileSmall} media='(max-width: 375px)' />

					<img src={profileSmall} alt='profile' />
				</picture>
			</div>
			<div className='hero-body'>
				<h1>
					Nice to meet you! I'm
					 <span>Adam Keyes.</span>
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
