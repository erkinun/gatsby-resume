import styled from 'styled-components'
import { Link } from 'gatsby'

export const orange = '#ed8936'
const StyledLink = styled(Link)(props => ({
  color: props.textColor,
  fontWeight: 800,
}))

export default StyledLink
