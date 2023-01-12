import React from 'react'
import { projects } from '../data/Data'
import { Singleproject } from './index'
import { StyledTitle, StyledLink, StyledSection, StyledFlex } from '../styles'

const Projects = () => {
	return (
		<StyledSection>
			<StyledFlex jc='space-between' align='center'>
				<StyledTitle>
					<h2>Projects</h2>
				</StyledTitle>
				<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
					contact me
				</StyledLink>
			</StyledFlex>

			<div className='items projects'>
				{projects.map((project) => {
					return <Singleproject key={project.id} {...project} />
				})}
			</div>
		</StyledSection>
	)
}

export default Projects
