import React from 'react'

import { Page } from '../components'
import BookCard from '../components/book-card'

// TODO add an intro text there!
// TODO maybe override links in book template component?
// TODO check everything works
// TODO use gatsby image for thumbnails?
// TODO will require sorting
// TODO implement search
// TODO affiliate-links?
const Books = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Books = edges.map(edge => {
    const links = {
      goodreadsLink: edge.node.frontmatter.goodreadsLink,
      amazonLink: edge.node.frontmatter.amazonLink,
    }
    return (
      <BookCard
        key={edge.node.id}
        photo={edge.node.frontmatter.thumbnail}
        title={edge.node.frontmatter.title}
        date={edge.node.frontmatter.date}
        score={edge.node.frontmatter.score}
        summary={edge.node.excerpt}
        links={links}
        postLink={edge.node.frontmatter.path}
      />
    )
  })
  return <Page title="Books" render={() => <div>{Books}</div>} />
}

export default Books

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(book)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            amazonLink
            goodreadsLink
            score
            thumbnail
          }
        }
      }
    }
  }
`
