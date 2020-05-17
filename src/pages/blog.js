import React from 'react'

import { Page } from '../components'
import { PostLink } from '../components'

// TODO 4 - pass page component some styling options to justify contents to top center or bottom?
// TODO 5 - more styling to blog list
// TODO make sure the blogs are pathed behind /blog/hede
// TODO add tags to blogs, then a search mechanism using those blogs
// TODO commenting mechanism?
// TODO find a way to export blogs from medium, or manually export them to netfly and use
// TODO previous/next post might be a nice thing

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Page
      title="Blog"
      render={() => (
        <div>
          {Posts.concat(Posts)
            .concat(Posts)
            .concat(Posts)
            .concat(Posts)
            .concat(Posts)}
        </div>
      )}
    />
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
