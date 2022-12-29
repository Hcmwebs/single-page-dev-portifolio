import React from 'react'
import { projects } from '../data/Data'
import { SingleProject } from './index'
import { StyledSection } from '../styles'

const Projects = () => {
	return (
		<StyledSection>
			<div className='items'>
				{projects.map((project) => {
					return <SingleProject key={project.id} {...project} />
				})}
			</div>
		</StyledSection>
	)
}

export default Projects
