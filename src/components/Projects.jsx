import React from 'react'
import { projects } from '../data/Data'

const Projects = () => {
	return (
		<div>
			{projects.map(({ id, imageLarge, title, skills, live, code }) => {

				return (
					<div className='card' key={id}>
						<img src={imageLarge} alt={title} />
						<div className='cardBody'>
							<h2>{title}</h2>
							<p className='skills'>{skills}</p>
						</div>
						<div className='cardFooter'>
							<div className='links'>
								<a
									href={live}
									target='_blank'
									rel='noopener noreferrer'
									className='btn'>
									{live}
								</a>
								<a
									href={code}
									target='_blank'
									rel='noopener noreferrer'
									className='btn'>
									{code}
								</a>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Projects
