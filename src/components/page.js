import React from 'react'
import { Header, Summary, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

const Page = ({ render }) => (
  <main className="antialiased text-neutral-900 bg-neutral-100 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-white py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      {render()}
      <Footer social={resume.social} />
    </div>
  </main>
)

export default Page
