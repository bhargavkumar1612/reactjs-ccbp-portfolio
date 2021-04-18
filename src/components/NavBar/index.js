import {Component} from 'react'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here
class NavBar extends Component {
  render() {
    const {selected, onClickNavItem} = this.props
    return (
      <div className="side-nav-bar">
        <div className="sidebar-items">
          <img
            className="nav-avatar"
            src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
            alt="avatar"
          />
          <div>
            {navBarItems.map(item => (
              <div
                className={
                  item.id === selected ? 'nav-item-selected' : 'nav-item'
                }
                key={item.id}
                onClick={() => onClickNavItem(item.id)}
                role="button"
                tabIndex={item.id}
              >
                <img className="nav-icon" src={item.iconUrl} alt="home" />
                <h1 className="nav-item-title">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
