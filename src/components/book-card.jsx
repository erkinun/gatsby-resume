import React from 'react'
import styled from 'styled-components'
import StyledLink from './styledLink'
const Title = styled.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
`

const Photo = styled.div`
  height: 12rem;
  width: 8rem;
  float: left;
  margin-right: 2rem;
  padding-top: 1rem;
`

const Img = styled.img`
  height: 100%;
`

const Main = styled.div`
  width: auto;
  margin-bottom: 2.5rem;
`

const Meta = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Date = styled.div`
  margin-right: 2rem;
`

const Text = styled.div`
  margin-bottom: 1rem;
`

const Link = styled.a`
  margin-right: 0.5rem;
`

const links = (goodreadsLink, amazonLink) => {
  const ls = [
    goodreadsLink && { name: 'Goodreads', link: goodreadsLink },
    amazonLink && { name: 'Amazon', link: amazonLink },
  ]

  return ls.map((l) => (
    <Link className="text-blue-500" href={l.link}>
      {l.name}
    </Link>
  ))
}

export default ({
  photo,
  title,
  date,
  score,
  summary,
  links: { goodreadsLink, amazonLink },
  postLink,
}) => {
  return (
    <Main>
      <Title className="text-blue-500">
        <Photo>
          <a href={`/books/${postLink}`}>
            <Img src={`/${photo}`} />
          </a>
        </Photo>
        <StyledLink
          to={`/books/${postLink}`}
          fontSize="2rem"
          marginBottom="1rem"
          display="block"
        >
          {title}
        </StyledLink>
      </Title>
      <div className="container" style={{ fontSize: '22px' }}>
        <Meta>
          <Date className="text-gray-500">
            Date Read: <span>{date}</span>
          </Date>
          <div className="text-gray-500">
            Score: <strong>{score}</strong>/10
          </div>
        </Meta>
        <Text>{summary}</Text>
        <div className="links">
          <a className="text-blue-500" href={`/books/${postLink}`}>
            Read the full review
          </a>{' '}
          or visit {links(goodreadsLink, amazonLink)}for reviews and details
        </div>
      </div>
    </Main>
  )
}
