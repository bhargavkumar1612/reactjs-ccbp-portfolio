// Write your code here
import {Component} from 'react'
import './index.css'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="subject-name">Sophie Miller</h1>
        <h1 className="subject-designation">Full Stack Developer</h1>
        <p className="subject-experience">
          Experienced in MongoDB, ExpressJS, NodeJS, ReactJS, BOOTSTRAP, HTML,
          CSS, SQL and Python.
        </p>
        <button className="view-resume" type="button">
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection
