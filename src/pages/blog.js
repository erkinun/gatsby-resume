import React from 'react'

import { Page } from '../components'

// TODO find a good starter but use the same style from resume
// TODO looks like markdown is not that supported?
// TODO find a way to export blogs from medium, or manually export them to netfly and use
const Blog = ({ data }) => {
  console.log('grapghl q here?: ', data)
  return (
    <Page title="Blog" render={() => <div>Blogs will be shown here</div>} />
  )
}

export default Blog
