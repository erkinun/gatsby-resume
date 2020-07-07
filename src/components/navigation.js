import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Menu from './menu-svg'
import Close from './close-svg'

// TODO deal with margins and paddings
const visible = collapsed =>
  collapsed ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 sm:opacity-100'
const style = collapsed =>
  `navigation flex-shrink-0 transition-opacity ${visible(collapsed)}`

// hack that i'm too tired to configure tailwind to transition on opacity to work
const StyledDiv = styled.div`
  transition: opacity 0.25s ease-in-out, max-height 0.25s ease-in-out;
`

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="transition-all duration-500 ease-in-out">
      <div
        className="text-white block sm:hidden"
        onClick={_ => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <Close className="fill-current text-white" />
        ) : (
          <Menu className="fill-current text-white" />
        )}
      </div>
      <StyledDiv className={style(collapsed)}>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/books">Books I've liked</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/journey">Journey as a Programmer</Link>
          </li>
        </ul>
      </StyledDiv>
    </div>
  )
}

export default Navigation
