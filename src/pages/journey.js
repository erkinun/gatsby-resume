import React from 'react'

import BlogTemplate from '../components/blog-template'

const content = `
<div>
<h1 id="journey-as-a-programmer">Journey as a Programmer</h1>
<p>
  I have been a programmer in some shape or form since 2008. Below is my
  journey and what I learned since then.
</p>
<h2 id="first-ever-job-that-paid-">First ever job (that paid 💰)</h2>
<p>
  I started with Microsoft .NET world in banking industry, learned a lot
  about C# and C++ at that time. You’d use (and probably still use) C++
  for speed and everything else C# in that world. I learned a bit about
  LINQ at that time (first seeds of functional programming, even though
  I didn’t know). Object Oriented Programming is the main paradigm and I
  didn’t question the validity and necessity of that paradigm. I left
  the company because there was literally no engineering best practices
  that enforced correct and safe code and product and I was beginning to
  burn out and even become disillusioned with the profession.
</p>
<h2 id="china-days">China days 🇨🇳</h2>
<p>
  Then I moved to Telecoms industry with Huawei. I still did C++ but our
  Chinese colleagues almost forbade us to do anything meaningful while I
  was there. At least I visited China for three months and learned a
  great deal of (even though waterfall) engineering practices during my
  tenure. I had to leave there for mandatory military service. And I
  finally left the world of Bill Gates at the end of 2010.
</p>
<h2 id="car-park-or-parking-lot-">Car park or Parking lot?</h2>
<p>
  I came back at mid 2011 from military service and dived straight into
  the Linux world with Java and Javascript for a software consulting
  firm. I learned a great deal about Linux and also became a personal
  Mac user in the meantime. Unfortunately the project we participated
  became bogus because of partners in Spain and company started to have
  cash flow problems. I too had similar financial problems and had to
  leave this company (called Parkyeri, Turkish word for “Car Park”) for
  Pozitron, my final employment in Turkey.
</p>
<h2 id="pozitron">Pozitron ⚛️</h2>
<p>
  Pozitron was the most important school for me after university
  honestly. I continued to improve my knowledge of Java and open source.
  I got the chance to work on various important projects there (BKM
  Express - Turkish version of Paypal at that time) and became a team
  leader after a while. We introduced practices like Unit Testing, Code
  Reviews, Linting, online course attendance, knowledge sharing
  presentations and even a Friday tech newsletter for the whole of
  engineering organisation. In Pozitron I was introduced to Scala and
  Functional Programming and it blew my mind. I became a FP enthusiast
  with Scala and started to look for more chances to program in that
  language. Since it was an amazing company, Pozitron used to send its
  engineers to conferences abroad. I have been to London for these types
  of conferences twice, attending QCON both times and finally decided to
  move abroad (at least for a while) to improve my skills because of
  these travels (and I fell in love with London too).
</p>
<h2 id="tripadvisor-dublin">TripAdvisor/Dublin 🇮🇪</h2>
<p>
  When I and my then girlfriend now wife made the decision to move
  abroad, I started to interview companies and finally ended up with
  TripAdvisor as a DevOps engineer due to some mistake in the interview
  organisation (and honestly I have to blame myself too). It took a
  while to convince me to become a DevOps engineer, but alas I moved to
  Dublin in September 2015. Thankfully, I managed to do a lot of
  programming in that job as well, mainly writing Python and Bash
  scripts to further automate the infrastructure and build processes of
  TripAdvisor. After trying out the DevOps craze for a year I decided
  I’d rather write functional Scala and left TripAdvisor for London UK.
  I was pretty amazed by the fact that in 2015 TripAdvisor was still
  running its own datacenter and they had physical server blades stacked
  in cooled racks and everything. I am sad that they had to let go a lot
  of their engineering team during the start of pandemic and I wonder if
  they are still using data centers by 2022?
</p>
<h2 id="to-the-uk-">To the UK 🇬🇧</h2>
<p>
  StepStone/Jobsite was my first employer in the UK. I was part of a
  team that was converting NodeJS data pipelines (crazy) running in EC2
  servers in AWS. We replaced them Scala/Spark applications that run in
  Elastic Hadoop containers (EMR) in AWS. The drop in application
  durations were drastic, from 20~ hours to 30~ minutes, and the gains
  were spectacular. During this employment I decided to learn about web
  development with React. The team started to fall apart after a while
  with some critical parts of the pipeline couldn’t be converted in
  time, I decided to join a startup called Quantemplate.
</p>
<h2 id="insurance-tech">Insurance tech</h2>
<p>
  Quantemplate defined itself as insure-tech platform that enabled its
  users to upload, clean, map, transform and analyse insurance data.
  They had a formidable backend of Akka clusters with the main web
  application written in a custom framework in Coffeescript. I learned a
  lot about Scala, functional programming and web development in this
  employment. But most importantly I learned that functional purity
  cannot save you from bad communication, confused organisation, wrong
  business choices, stale leadership, low developer happiness and
  inefficient processes. In this employment I started to recognise that
  static typing languages have their own kind of engineers while dynamic
  typed languages are used via engineers with a different type of
  mindset, namely pragmatism.
</p>
<h2 id="dynamic-pragmatism">Dynamic pragmatism 🌐</h2>
<p>
  This led to me to learn Clojure and my employment in Uswitch (now
  named as RVU in the UK). I started to work for one of the backend
  service teams and improved my understanding of microservices
  architecture, dynamic typed languages, Clojure (which might be the
  best programming language in the world, albeit with some
  disadvantages) and surprisingly React and Javascript. The more I learn
  Clojure, the more I started to appreciate the pragmatism of Javascript
  and started to like web development more. After a while I moved to the
  engineering team of <a href="http://money.co.uk">money.co.uk</a> which
  is a different brand in the RVU, focusing mostly on a main CMS based
  React application alongside with a NodeJS api using Typescript.
</p>
<h1 id="what-i-really-learned">What I really learned</h1>
<p>
  I learned some tricks along the way, and I’m always in the beginner’s
  mindset to figure this whole mess out. I can share some of the tidbits
  I kind of think might be helpful to some other people.
</p>
<h3 id="first-things-first-software-is-hard-">
  First things first, software is hard! 💣
</h3>
<p>
  As is the case with anything worthwhile to pursue,
  <strong>software development is hard</strong>! It looks incredibly
  easy to start, but scaling a working application that’s beneficial to
  human beings and organisations is a tough problem. Unfortunately there
  are no <strong>silver bullets</strong> but rather sets of principles
  and tools that we can live by, which can help ease the burden if ever
  so slightly. Accepting this fact will make things easier for the
  software engineer in the long run (hopefully).
</p>
<h3 id="pragmatism-trumps-dogma">Pragmatism trumps dogma 📔</h3>
<p>
  As engineers, we should always strive to deliver the correct solution
  for the given problem and environment. If you are coding for a
  <strong>passenger jet</strong> sofware, you should use all the safety
  tools in your disposal. Type safety, linters, enormous amounts of
  testing (especially testing) to say the least. But for example, if you
  are working on a web application, you should be using some easy to use
  tools to quickly iterate on ideas. Blindly following a set of rules
  does not help anyone on the long run (hell, even on the mid run).
  There’s always <strong>pros and cons</strong> and we should be mindful
  of this fact.
</p>
<h3 id="you-can-t-beat-testing">You can’t beat testing 🧪</h3>
<p>
  There’s no getting around testing unless you are writing POC or a very
  small cronjob etc. Even with the strictest compiler, you will always
  confuse yourself at one point and destroy at least some bits of your
  application. Please write <strong>tests</strong> and to write testable
  code, and please use <strong>functions</strong> and functional
  programming (even just writing pure functions mostly would help
  tremendously) (because it makes it much much easier to test!).
</p>
<h3 id="our-not-ancient-profession">Our (not) Ancient Profession 💾</h3>
<p>
  Unlike civil engineering, teaching, architecture, baking, farming and
  countless others I can’t recite, computer engineering is still at its
  infancy. Its current theoretical roots are
  <strong>younger than hundred years</strong> as of 2022. Even though
  (especially in the last decade or so) we have some of the best minds
  in the world in our field, we learn by
  <strong>mistakes and trial and error</strong> (and those best minds
  are focused on selling more ad views and curating fake news on news
  feeds). Unfortunately that means we are yet to find solutions to most
  of our problems. But this is fine, we just have to be patient and have
  an open mind and we will slowly get our profession collectively to a
  mature point over decades or maybe even centuries.
</p>
<h3 id="static-vs-dynamic-typing">Static vs Dynamic typing ⌨️</h3>
<p>
  I’ve been on the both sides (mostly on the static type side) of the
  fence on this issue over my career. I have come to realise one thing:
  <strong>there’s no clear winner.</strong> Static types gives you a bit
  more peace of mind but it’s more or less meaningless if you are
  writing a program that talks to anything over the Internet (
  <strong>
    you don’t know what you will receive hence you can’t prepare your
    types for that
  </strong>
  )(ah yes you can but then everything will be <code>nullable</code> or
  <code>option</code> or whatever type that supports that). Dynamic
  typed languages are very fast to prototype in (
  <strong>best choice in coding interviews</strong>, because you have to
  write less code and think about objects/maps instead) but you can get
  beaten by your own limited brain capacity (ie changing argument/field
  types, names, order) unless you have <strong>sufficient tests</strong>
  . So, there are advantages and disadvantages to both sides and as an
  engineer we should always be mindful of the trade offs when picking a
  language, which leads me to my next principle.
</p>
<h3 id="know-your-trade-offs">Know your trade offs 🤔</h3>
<p>
  One could argue that software engineering is the art of being aware of
  the trade offs and the risks these trade offs pose for your current
  project/environment/business. As you can already gather from the
  previous ideas, there’s no silver bullet to programming and every
  decision you make will have
  <strong>advantages and consequences</strong>. Just
  <strong>don’t forget</strong> about the consequences! (There are
  various techniques to document these so we and the team can remember
  them later on, like
  <strong>
    <a href="https://adr.github.io/">ADRs</a>
  </strong>
  )
</p>
<h3 id="choose-boring-tech">Choose boring tech 🤯</h3>
<p>
  After the above paragraph, you now know about decisions and
  consequences. So on your next project, you have to pick say, the
  frontend framework to build your web application. What are you going
  to pick? The next shiny framework, or the old and boring one? Yeah,
  younger engineers in the team would like to try their hands on the new
  framework, but do you know what that tech can <strong>cost</strong>
  you in the long run? Can you support its <strong>maintenance</strong>?
  Are there going to be patches to its
  <strong>bugs and security holes</strong>? Are you going to find
  <strong>community support</strong> when you need it the most and the
  quickest? These are important tasks and they will suck the energy out
  of your team in the medium to long term. But instead, you can probably
  go with a known and boring technology like React (even React has its
  new gotchas coming up every day thanks to Google and its core web
  vitals approach changes). You can find support, engineers and common
  knowledge for React easily. So what do you do? You pick the
  <strong>boring technology.</strong> (This is by no means my original
  idea, but from this brilliant
  <a href="https://boringtechnology.club/" target="_blank">person</a> and his essay
  about the <strong>consequences of technology selection</strong>
  <a href="https://mcfunley.com/choose-boring-technology" target="_blank">here</a>, but
  I can say that it easily became one of my core principles in
  programming and engineering)
</p>
<h1 id="verdict">Verdict</h1>
<p>
  Even though I am not the young and chirpy engineer anymore, searching
  for the holy grail of software engineering, I’ve come to accept that
  what we do is hard and we should be careful and calculating about
  technology and decisions around it. I still am fascinated by the power
  automation and would like to work towards welfare of others through
  software engineering. Computers are amazing and I like working on them
  for another 25 years hopefully!
</p>
</div>
`

const Journey = () => (
  <BlogTemplate data={{ markdownRemark: { html: content } }} />
)

export default Journey
