import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/page'
import { blue } from '../components/styledLink'

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  `
  const Date = styled.h2`
    margin-bottom: 1rem;
  `

  const Blog = styled.div`
    max-width: 800px;
    margin: 0 auto;
  `

  const BlogBody = styled.div`
    line-height: 2rem;
    font-size: 1.25rem;

    p {
      margin-bottom: 1.5rem;
    }

    a {
      color: ${blue};
    }
  `

  return (
    <Page
      render={() => (
        <Blog className="blog-post-container">
          <div className="blog-post">
            <Title className="text-primary-500">{frontmatter.title}</Title>
            <Date className="text-neutral-500">
              Posted on {frontmatter.date}
            </Date>
            <BlogBody
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Blog>
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
