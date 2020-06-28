import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Photo = styled.div`
  height: 9rem;
  width: 6rem;
  float: left;
  margin-right: 2rem;
`

const Main = styled.div`
  width: 50rem;
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

  return ls.map(l => <Link href={l.link}>{l.name}</Link>)
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
      <Photo>Photo will be here</Photo>
      <Title>{title}</Title>
      <div className="container">
        <Meta>
          <Date>
            Date Read: <span>{date}</span>
          </Date>
          <div>
            Score: <strong>{score}</strong>/10
          </div>
        </Meta>
        <Text>{summary}</Text>
        <div className="links">
          <a href={postLink}>Read the full review</a> or visit{' '}
          {links(goodreadsLink, amazonLink)}for reviews and details
        </div>
      </div>
    </Main>
  )
}