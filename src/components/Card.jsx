import React from 'react'
import { projects } from '../data/Data'

const Card = () => {
	return (
		<div>
			{projects.map((project) => {
				const { id, imageLarge, title, skills, link1, link2 } = project
				return (
					<div className='card' key={id}>
						<img src={imageLarge} alt={title} />
						<div className='cardBody'>
							<h2>{title}</h2>
							<p className='skills'>{skills}</p>
						</div>
						<div className='cardFooter'>
							<div className='buttons'>
								<button className='btn'>{link1}</button>
								<button className='btn'>{link2}</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Card
