import styled from 'styled-components'
import { Link } from 'gatsby'

// TODO make this read from tailwind
export const blue = '#4299E1'
const StyledLink = styled(Link)(props => ({
  color: props.textColor,
  fontWeight: 800,
}))

export default StyledLink
