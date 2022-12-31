import React from 'react'
import { projects } from '../data/Data'
import { SingleProject } from './index'
import { StyledTitle, StyledLink, StyledSection, StyledFlex } from '../styles'

const Projects = () => {
	return (
		<StyledSection>
			<StyledFlex jc='space-between' align='center' width='100%'>
				<StyledTitle>
					<h2>Projects</h2>
				</StyledTitle>
				<StyledLink href='#' target='_blank' rel='noopener noreferrer'>
					contact me
				</StyledLink>
			</StyledFlex>

			<div className='items projects'>
				{projects.map((project) => {
					return <SingleProject key={project.id} {...project} />
				})}
			</div>
		</StyledSection>
	)
}

export default Projects
