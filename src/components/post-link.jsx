import React from 'react'
import StyledLink from './styledLink'

const PostLink = ({ post }) => (
  <div>
    <StyledLink to={post.frontmatter.path}>{post.frontmatter.title}</StyledLink>
    <div>
      {post.excerpt} <StyledLink to={post.frontmatter.path}>>></StyledLink>
    </div>
    <div>{post.frontmatter.date}</div>
  </div>
)

export default PostLink
