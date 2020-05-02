import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

// TODO do better css design and use rem and ems
// . TODO replace navigation with a menu burger pill in smaller screens
// . TODO put footer to glued to the bottom of the page
// TODO under development page?
// TODO make sure index also uses page?
// TODO add courses? cms? like coursera functional, udemy react and execute typescript
// TODO fix the navigation width thing
// TODO books and netlify cms
// TODO fix other parts? books? use netlify cms for that?
// TODO evolution (about me) design and impl
// TODO pdf download for resume?

const Page = ({ render, title }) => (
  <main className="antialiased text-neutral-900 bg-blue-800 min-h-screen sm:p-5">
    <SEO title={title} />
    <div className="container mx-auto shadow bg-blue-900 py-5 px-10">
      <Header name={resume.fullname} role={resume.role} />
      <div className="md:flex main text-white">
        <Navigation />
        <section className="py-5 border-b border-neutral-800 lg:flex items-center">
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
