import React from 'react'
import SocialIcon from './social_icon'

const Footer = ({ social }) => (
  <footer className="flex-shrink-0 w-full py-6 mx-auto items-center justify-between md:flex">
    <div className="items-center flex tracking-wide mb-5 md:mb-0 justify-center text-sm ml-2">
      <span className="inline-block mr-1 text-white">
        © {new Date().getFullYear()} | Developed with
      </span>
      <a
        className="text-blue-500 hover:text-blue-700 font-bold"
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        GatsbyJS
      </a>
    </div>
    {social && (
      <div className="flex items-center justify-center ml-2">
        {social.map((item) => (
          <a
            key={item.service}
            className="footer-social-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <SocialIcon type={item.service} />
          </a>
        ))}
      </div>
    )}
  </footer>
)

export default Footer
