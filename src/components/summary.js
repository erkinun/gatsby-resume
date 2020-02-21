import React from 'react'
import Evolution from './evolution'

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      {data}
    </p>
    <Evolution />
  </section>
)

export default Summary
