import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

import Page from '../components/page'
import { blue } from '../components/styledLink'

deckDeckGoHighlightElement()

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

    img {
      max-width: 600px;
      margin: 0px auto;
    }

    h1 {
      font-size: 2rem;
      font-weight: 800;
      margin: 1.5rem 0;
    }

    h2,
    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      margin: 1rem 0;
    }

    ul {
      list-style: inside;
    }

    ol {
      list-style: upper-roman;
    }
  `

  return (
    <Page
      render={() => (
        <Blog className="blog-post-container">
          <div className="blog-post">
            {frontmatter?.title && (
              <Title className="text-blue-500">{frontmatter.title}</Title>
            )}
            {frontmatter?.date && (
              <Date className="text-gray-500">
                Posted on {frontmatter.date}
              </Date>
            )}
            <BlogBody
              className="blog-post-content text-gray-500"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Blog>
      )}
    />
  )
}

export const query = graphql`
  query ($pathForBlog: String!) {
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
