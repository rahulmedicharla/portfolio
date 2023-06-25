import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ExperienceContainer.css'

const ExperienceContainer = ({ exp }) => (
  <div className='experience'>
    <h3>{exp.name}</h3>
    <p className='experience__description'>{exp.date}</p>
    <p className='experience__description'>{exp.description}</p>
    {exp.stack && (
      <ul className='experience__stack'>
        {exp.stack.map((item) => (
          <li key={uniqid()} className='experience__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {exp.sourceCode && (
      <a
        href={exp.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank"
        rel='noreferrer'
      >
        <GitHubIcon />
      </a>
    )}

    {exp.livePreview && (
      <a
        href={exp.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
        rel='noreferrer'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ExperienceContainer