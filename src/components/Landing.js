import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import StyledLink, { blue } from './styledLink'
import profile from './profile.png'

import resume from '../../data/profile.json'

const Paragraph = styled.p`
  margin-left: auto;
  margin-right: auto;
`
const Welcome = styled.p`
  font-size: 2rem;
`

const StyledImg = styled(Img)`
  border-radius: 25px;
  width: 300px;
`

const Landing = ({ data }) => (
  <div className="h-auto w-auto py-10 px-10 lg:flex items-center">
    <StyledImg
      className="rounded flex-shrink-0 mx-auto w-32 lg:w-full xl:w-4/5"
      fluid={data.file.childImageSharp.fluid}
      alt="profile"
    />
    <Paragraph className="text-center px-10 tracking-wide leading-relaxed lg:text-left lg:text-lg text-white">
      <Welcome>Hi, I'm {resume.fullname}.</Welcome>
      {resume.summary} I{' '}
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
  </div>
)

export default Landing
