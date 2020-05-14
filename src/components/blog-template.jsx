import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Page
      render={() => (
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      )}
    />
  )
}

export const query = graphql`
  query($pathForBlog: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathForBlog } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
