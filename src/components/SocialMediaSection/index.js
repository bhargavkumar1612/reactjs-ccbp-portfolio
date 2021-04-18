import './index.css'
import {Component} from 'react'

const socialMediaAppsData = [
  {
    id: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-logo-img.png',
    name: 'linkedIn',
    siteUrl: 'https://www.linkedin.com/',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/reddit-logo-img.png',
    name: 'reddit',
    siteUrl: 'https://www.reddit.com/',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-logo-img.png',
    name: 'instagram',
    siteUrl: 'https://www.instagram.com/',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-logo-img.png',
    name: 'facebook',
    siteUrl: 'https://www.facebook.com/',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/pintrest-logo-img.png',
    name: 'pinterest',
    siteUrl: 'https://www.pinterest.com/',
  },
]

// Write your code here
class SocialMediaSection extends Component {
  render() {
    return (
      <div className="social-media-icons-container">
        {socialMediaAppsData.map(item => (
          <a target="_blank" rel="noreferrer" href={item.siteUrl} key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="social-media-icon"
            />
          </a>
        ))}
      </div>
    )
  }
}
export default SocialMediaSection
