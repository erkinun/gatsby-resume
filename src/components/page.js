import React from 'react'
import { Header, Footer, Navigation, SEO } from '../components'
import resume from '../../data/profile'
import '../main.css'

// TODO netfly start?
// immediate UI, navigation left oriented?, better pic, main content margin increase?
// TODO pass down title as a props to seo
// TODO check out what tailwind is
// TODO buy domain name?
// TODO try to bring in sass/emotion
// TODO fix the navigation width thing
// TODO use emotion or other for styling?

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
