import React from 'react'

import { Page } from '../components'
import { PostLink } from '../components'

// TODO SEO on each page?
// TODO add an intro text to listings page
// TODO collect all the blog images to one place
// TODO 4 - pass page component some styling options to justify contents to top center or bottom?
// TODO add tags to blogs, then a search mechanism using those blogs, especially languages tag
// TODO commenting mechanism? or just a contact me page?
// TODO previous/next post might be a nice thing

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <Page title="Blog" render={() => <div>{Posts}</div>} />
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
