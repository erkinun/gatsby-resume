import React from 'react'
import { Link } from 'gatsby'
import Contact from './contact'

const Header = ({ name, role, contacts }) => (
  <header className="border-b border-neutral-800 pb-2 md:flex items-center justify-between">
    <div>
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        <Link to="/">{name}</Link>
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-white leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
    <div className="mt-5 md:mt-0 md:border-l md:border-neutral-800 md:pl-4">
      {contacts &&
        Object.keys(contacts).map(key => (
          <Contact key={key} field={key} value={contacts[key]} />
        ))}
    </div>
  </header>
)

export default Header
