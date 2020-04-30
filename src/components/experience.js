import React from 'react'

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <h2 className="item-header text-white">{item.role}</h2>
          <h3 className="item-sub">
            {item.company} | {item.start} - {item.end || 'PRESENT'}
          </h3>
          {
            // TODO change the way tech and description is represented
          }
          <p className="py-6">Tech used: {item.tech}</p>
          <p className="py-6">{item.description}</p>
        </article>
      ))}
  </section>
)

export default Experience
