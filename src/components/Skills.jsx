import React from 'react'
import { skills } from '../data/Data'
import {SingleSkill} from './index'

const Skills = () => {
	return (
		<div>
			{skills.map((skill) => {
				return <SingleSkill key={skill.id} {...skill} />
			})}
		</div>
	)
}

export default Skills
