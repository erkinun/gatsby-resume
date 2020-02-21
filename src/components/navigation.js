import React from 'react'

const Navigation = () => (
  <div className="navigation">
    <img
      className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
      src="./profile.jpg"
      alt="profile"
    />
    <ul className="navbar">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/resume">Resume</a>
      </li>
      <li>Books I've liked</li>
      <li>Blog</li>
    </ul>
  </div>
)

export default Navigation
