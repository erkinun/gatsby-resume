import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Section = styled.section`
  width: 1000px;
`

const Summary = ({ data }) => (
  <Section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <Paragraph className="text-center tracking-wide leading-relaxed lg:text-left lg:text-lg">
      {data}
    </Paragraph>
  </Section>
)

export default Summary
