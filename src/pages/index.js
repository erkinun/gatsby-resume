import React from 'react'
import { Header, Landing, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

const Home = () => (
  <main className="antialiased text-neutral-900 bg-blue-800 min-h-screen sm:p-5">
    <SEO title="Home" />
    <div className="container mx-auto shadow bg-blue-900 py-5 px-10">
      <Header name={resume.fullname} role={resume.role} />
      <div className="main md:flex">
        <Navigation />
        <Landing data={resume.summary} />
      </div>

      <Footer social={resume.social} />
    </div>
  </main>
)

export default Home
