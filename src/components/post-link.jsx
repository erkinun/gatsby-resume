import React from 'react'
import styled from 'styled-components'

import StyledLink from './styledLink'

const StyledDiv = styled.div`
  margin-bottom: 2rem;
`

const DateDiv = styled.div`
  margin-top: 0.75rem;
`

const PostLink = ({ post }) => (
  <StyledDiv>
    <StyledLink
      to={`/blog/${post.frontmatter.path}`}
      fontSize="2rem"
      marginBottom="1rem"
      display="block"
    >
      {post.frontmatter.title}
    </StyledLink>
    <div>
      {post.excerpt}{' '}
      <StyledLink to={`/blog/${post.frontmatter.path}`}>>></StyledLink>
    </div>
    <DateDiv className="text-gray-500">{post.frontmatter.date}</DateDiv>
  </StyledDiv>
)

export default PostLink
