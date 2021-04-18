// Write your code here
import {Component} from 'react'
import './index.css'
import SocialMediaSection from '../SocialMediaSection'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import AboutSection from '../AboutSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'

const Sections = [
  <HomeSection />,
  <AboutSection />,
  <ProjectsSection />,
  <ContactSection />,
]

// Write your code here
class Portfolio extends Component {
  state = {selected: 0}

  onClickNavItem = id => {
    this.setState({selected: id})
  }

  render() {
    const {selected} = this.state
    return (
      <div className="bg-container">
        <NavBar selected={selected} onClickNavItem={this.onClickNavItem} />
        <div className="content-social">
          <div className="content">{Sections[selected]}</div>
          <div className="social">
            <SocialMediaSection />
          </div>
        </div>
      </div>
    )
  }
}
export default Portfolio
