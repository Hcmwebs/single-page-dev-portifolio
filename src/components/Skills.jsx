import React from 'react'
import { skills } from '../data/Data'
import { StyledSection } from '../styles'
import { SingleSkill } from './index'

const Skills = () => {
	return (
		<StyledSection>
			{skills.map((skill) => {
				return <SingleSkill key={skill.id} {...skill} />
			})}
		</StyledSection>
	)
}

export default Skills
