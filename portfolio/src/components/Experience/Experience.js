import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'


const Experience = () => {
    console.log(experience)
    if (!experience.length) return null

    return (
      <section id='experience' className='section experience'>
        <h2 className='section__title'>Experience</h2>
  
        <div className='experience_grid'>
          {experience.map((exp) => (
            <ExperienceContainer key={uniqid()} exp={exp} />
          ))}
        </div>
      </section>
    )
}

export default Experience