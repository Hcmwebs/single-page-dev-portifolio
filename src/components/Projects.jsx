import React from 'react'
import { projects } from '../data/Data'
import { SingleProject } from './index'
import { StyledTitle, StyledLink, StyledSection } from '../styles'

const Projects = () => {
	return (
		<StyledSection>
			<div>
				<StyledTitle>
					<h2>Projects</h2>
				</StyledTitle>
				<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
					contact me
				</StyledLink>
			</div>
			<div className='items'>
				{projects.map((project) => {
					return <SingleProject key={project.id} {...project} />
				})}
			</div>
		</StyledSection>
	)
}

export default Projects
