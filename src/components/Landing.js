import React from 'react'
import styled from 'styled-components'

import StyledLink, { orange } from './styledLink'

import resume from '../../data/profile.json'

const Paragraph = styled.p`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Section = styled.section`
  width: 1000px;
`
const Welcome = styled.p`
  font-size: 2rem;
`

const Landing = ({ data }) => (
  <Section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <Paragraph className="text-center tracking-wide leading-relaxed lg:text-left lg:text-lg">
      <Welcome>Hi, I'm {resume.fullname}.</Welcome>
      {data} I{' '}
      <StyledLink textColor={orange} to="/books">
        read
      </StyledLink>{' '}
      a lot,{' '}
      <StyledLink textColor={orange} to="/blog">
        write
      </StyledLink>{' '}
      a bit, try to find the best format for an online{' '}
      <StyledLink textColor={orange} to="/resume">
        CV
      </StyledLink>{' '}
      and{' '}
      <StyledLink textColor={orange} to="/evolution">
        reflect
      </StyledLink>{' '}
      ony my journey.
    </Paragraph>
  </Section>
)

export default Landing
