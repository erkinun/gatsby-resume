import styled from 'styled-components'
import { Link } from 'gatsby'

// TODO make this read from tailwind
export const blue = '#4299E1'
const StyledLink = styled(Link)(props => ({
  color: props.textColor ?? blue,
  fontWeight: 800,
  ...(props.fontSize && { fontSize: props.fontSize }),
  ...(props.marginBottom && { marginBottom: props.marginBottom }),
  ...(props.display && { display: props.display }),
}))

export default StyledLink
