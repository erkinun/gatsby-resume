import React from 'react'
import profile from './profile.png'

const Navigation = () => (
  <div className="navigation">
    <img
      className="rounded mx-auto w-32 lg:w-full xl:w-4/5"
      src={profile}
      alt="profile"
    />
    <ul className="navbar">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      <li>
        <a href="/books">Books I've liked</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/evolution">Evolution as a Programmer</a>
      </li>
    </ul>
  </div>
)

export default Navigation
