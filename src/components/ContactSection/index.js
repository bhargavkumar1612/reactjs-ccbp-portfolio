// Write your code here
import {Component} from 'react'
import './index.css'

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1 className="title">My contact</h1>
        <img
          className="map-img"
          src="https://assets.ccbp.in/frontend/react-js/location-img.png"
          alt="map"
        />
        <p className="para">
          If you like my projects and want to work with me please contact me...
        </p>
        <h1 className="please-contact">Please Contact</h1>
        <p className="para">9123654780</p>
        <p className="para">sophie.miller@gmail.com</p>
      </div>
    )
  }
}

export default ContactSection
