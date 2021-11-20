import React from 'react'

import { Page, Projects } from '../components'
import resume from '../../data/profile'

const ProjectsPage = () => (
  <Page
    title="Projects"
    render={() => (
      <div className="lg:w-2/3 lg:pr-8">
        {resume.projects && <Projects data={resume.projects} />}
      </div>
    )}
  />
)

export default ProjectsPage
