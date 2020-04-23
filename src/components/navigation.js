import React from 'react'
import profile from './profile.png'
import { Link } from 'gatsby'

const Navigation = () => (
  <div className="navigation">
    <img
      className="rounded mx-auto w-32 lg:w-full xl:w-4/5"
      src={profile}
      alt="profile"
    />
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
