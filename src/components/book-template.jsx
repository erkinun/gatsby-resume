import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/page'
import { blue } from '../components/styledLink'

export default function BookTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const Photo = styled.div`
    height: 12rem;
    width: 8rem;
    float: left;
    margin-right: 2rem;
    padding-top: 1rem;
  `

  const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  `
  const Date = styled.h2`
    margin-bottom: 1rem;
  `

  const Score = styled.h2`
    margin-bottom: 1rem;
  `

  const Book = styled.div`
    max-width: 800px;
    margin: 0 auto;
  `

  const Body = styled.div`
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
  `

  return (
    <Page
      render={() => (
        <Book className="blog-post-container">
          <div className="blog-post">
            <Photo>
              <img src={frontmatter.thumbnail} />
            </Photo>
            <Title className="text-primary-500">{frontmatter.title}</Title>
            <Date className="text-neutral-500">
              Date read {frontmatter.date}
            </Date>
            <Score className="text-neutral-500">
              How much I recommend: <strong>{frontmatter.score}</strong>/10, Go
              to{' '}
              {frontmatter.amazonLink && (
                <a className="text-primary-500" href={frontmatter.amazonLink}>
                  Amazon
                </a>
              )}
              {' or '}
              {frontmatter.goodreadsLink && (
                <a
                  className="text-primary-500"
                  href={frontmatter.goodreadsLink}
                >
                  Goodreads
                </a>
              )}{' '}
              for other reviews
            </Score>
            <Body
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </Book>
      )}
    />
  )
}

export const query = graphql`
  query($pathForBook: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathForBook } }) {
      html
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
`
