import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

// TODO do better css design and use rem and ems
// . TODO fix padding in navigation and etc in mobile screens
// TODO for blogs, first data in gatsby then cms support
// TODO add courses? cms? like coursera functional, udemy react and execute typescript
// TODO fix the navigation width thing
// TODO fix other parts? books? use netlify cms for that?
// TODO evolution (about me) design and impl
// TODO pdf download for resume?

const Page = ({ render, title }) => (
  <main className="antialiased text-neutral-900 bg-blue-800 min-h-screen sm:p-5">
    <SEO title={title} />
    <div className="container flex flex-col min-h-screen mx-auto shadow bg-blue-900 py-5 px-10">
      <Header name={resume.fullname} role={resume.role} />
      <div className="md:flex-row flex-col md:flex flex-1 main text-white">
        <Navigation />
        <section className="flex-1 py-5 border-b border-neutral-800 lg:flex items-center">
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
