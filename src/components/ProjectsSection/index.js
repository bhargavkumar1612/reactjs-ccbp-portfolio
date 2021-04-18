import {Component} from 'react'
import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

// Write your code here
class ProjectSection extends Component {
  render() {
    return (
      <div className="projects">
        <h1 className="title">My Work</h1>
        <div className="projects-container">
          {projectsData.map(item => (
            <div className="project-card">
              <img
                className="project-img"
                src={item.imageUrl}
                alt={item.name}
              />
              <h1 className="project-title">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ProjectSection
