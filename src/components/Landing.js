import React from 'react'
import styled from 'styled-components'

import StyledLink, { blue } from './styledLink'
import profile from './profile.png'

import resume from '../../data/profile.json'

const Paragraph = styled.p`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Section = styled.section`
  width: 1000px;
  height: 500px;
`
const Welcome = styled.p`
  font-size: 2rem;
`

const StyledImg = styled.img`
  border-radius: 25px;
  width: 300px;
`

const Landing = ({ data }) => (
  <Section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <StyledImg
      className="rounded mx-auto w-32 lg:w-full xl:w-4/5"
      src={profile}
      alt="profile"
    />
    <Paragraph className="text-center tracking-wide leading-relaxed lg:text-left lg:text-lg text-white">
      <Welcome>Hi, I'm {resume.fullname}.</Welcome>
      {data} I{' '}
      <StyledLink textColor={blue} to="/books">
        read
      </StyledLink>{' '}
      a lot,{' '}
      <StyledLink textColor={blue} to="/blog">
        write
      </StyledLink>{' '}
      a bit, try to find the best format for an online{' '}
      <StyledLink textColor={blue} to="/resume">
        CV
      </StyledLink>{' '}
      and{' '}
      <StyledLink textColor={blue} to="/evolution">
        reflect
      </StyledLink>{' '}
      ony my journey.
    </Paragraph>
  </Section>
)

export default Landing
