import React from 'react'
import { skills } from '../data/Data'
import { StyledSection } from '../styles'
import { SingleSkill } from './index'

const Skills = () => {
	return (
		<StyledSection className = 'skills'>
			<div className='items skills'>
				{skills.map((skill) => {
					return <SingleSkill key={skill.id} {...skill} />
				})}
			</div>
		</StyledSection>
	)
}

export default Skills
