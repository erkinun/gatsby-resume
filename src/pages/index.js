import React from 'react'
import { graphql } from 'gatsby'

import { Page, Landing } from '../components'

const Home = ({ data }) => (
  <Page title="Home" render={() => <Landing data={data} />} />
)

export default Home

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
