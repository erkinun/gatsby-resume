import React from 'react'
import styled from 'styled-components'
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

// TODO rename this to main content? home landing?
const Summary = ({ data }) => (
  <Section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <Paragraph className="text-center tracking-wide leading-relaxed lg:text-left lg:text-lg">
      <Welcome>Hi, I'm {resume.fullname}.</Welcome>
      {data}
    </Paragraph>
  </Section>
)

export default Summary
