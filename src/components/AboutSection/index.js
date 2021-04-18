import {Component} from 'react'
import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here

class AboutSection extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age.
          I&apos;am 21 years old, pursuing my Computer science major in Santa
          Clara , USA. Web development is my center of interest.
        </p>
        <div className="education-skills-container">
          <div className="card">
            <h1 className="card-title">Education</h1>
            <ul className="education-list-container">
              {educationData.map(item => (
                <li className="eduction-item">
                  <h1 className="education-qualification">
                    {item.qualification}
                  </h1>
                  <p className="education-place">{item.qualificationSource}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h1 className="card-title">Skills</h1>
            <div className="skills-container">
              {skillsData.map(skill => (
                <div className="skill" key={skill.id}>
                  <h1 className="skill-name">{skill.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
