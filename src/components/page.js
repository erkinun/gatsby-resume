import React from 'react'
import { Header, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

// TODO remove contact details from header?
// TODO move avatar to main screen
// TODO pass down title as a props to seo
// TODO check out how tailwind works
// TODO create your own logo
// TODO buy domain name?
// TODO try to bring in sass/emotion
// TODO fix the navigation width thing
// TODO fix other parts? books? use netlify cms for that?

const Page = ({ render }) => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
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

export default Page
