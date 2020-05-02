import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
  <div className="navigation flex-shrink-0">
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
        <Link to="/evolution">Evolution as a Programmer</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
