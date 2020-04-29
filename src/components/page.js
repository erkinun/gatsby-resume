import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

// TODO check out how tailwind works - why it doesn't work
// TODO create your own logo
// TODO buy domain name?
// TODO do better css design and use rem and ems
// TODO add courses? cms? like coursera functional, udemy react and execute typescript
// TODO fix the navigation width thing
// TODO books and netlify cms
// TODO fix other parts? books? use netlify cms for that?
// TODO evolution design and impl

const Page = ({ render, title }) => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title={title} />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header name={resume.fullname} role={resume.role} />
      <div className="page-content main">
        <Navigation />
        <section className="py-5 border-b border-neutral-300 lg:flex items-center">
          {render()}
        </section>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
)

Page.defaultProps = {
  title: 'Resume',
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Page
