import React, { Component } from 'react'
import Faq from 'react-faq-component'
import '../assets/css/faq.css'
import { Helmet } from 'react-helmet'
import Safe from 'react-safe'
import FaqPage from './faqfinal'
import EachFaq from './EachFaq'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.toggleView = this.toggleView.bind(this)
  }
  toggleView = (e) => {
    e.target.nextElementSibling.classList.toggle('active')
    let labelIcon = e.target.lastElementChild
    let icons = labelIcon.lastElementChild
    icons.classList.toggle('rotate')
  }

  render() {
    return (
      <>
        <div className="faq">
          <FaqPage />
        </div>
      </>
    )
  }
}
