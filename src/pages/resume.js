import React from 'react'
import {
  Header,
  Experience,
  Projects,
  Skills,
  List,
  Education,
  Footer,
  SEO,
} from '../components'
import resume from '../../data/profile'
import '../main.css'

const Home = () => (
  <main className="antialiased text-white bg-blue-800 min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container mx-auto shadow bg-blue-900 py-5 px-10">
      <Header
        contacts={resume.contact}
        name={resume.fullname}
        role={resume.role}
      />
      <div className="border-b border-gray-800 pb-2 my-5">
        <div className="lg:w-2/3 lg:pr-8">
          {resume.experience && <Experience data={resume.experience} />}
          {resume.projects && <Projects data={resume.projects} />}
        </div>
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-gray-800 ">
          {resume.skills && <Skills data={resume.skills} />}
          {resume.education && <Education data={resume.education} />}
          {resume.sidebar &&
            resume.sidebar.map((item) => (
              <List key={`${item.title}-side`} data={item} />
            ))}
        </div>
      </div>
      <Footer social={resume.social} />
    </div>
  </main>
)

export default Home
