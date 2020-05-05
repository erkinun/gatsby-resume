import React from 'react'

import { Page, Landing } from '../components'

import resume from '../../data/profile'

const Home = () => (
  <Page title="Home" render={() => <Landing data={resume.summary} />} />
)

export default Home
