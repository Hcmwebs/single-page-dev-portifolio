import React from 'react'
import { projects } from '../data/Data'
import {SingleProject} from './index'

const Projects = () => {
	return (
		<div>
			{projects.map((project) => {
				return <SingleProject key={project.id} {...project} />
			})}
		</div>
	)
}

export default Projects
