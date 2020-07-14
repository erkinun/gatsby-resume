---
path: pragmatic_programmer
date: 2020-06-28T16:14:07.854Z
title: 'The Pragmatic Programmer: your journey to mastery, 20th Anniversary Edition'
score: 8
amazonLink: https://www.amazon.co.uk/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/ref=sr_1_1?crid=259W5Y2V4J1F7&dchild=1&keywords=pragmatic+programmer&qid=1593360949&sprefix=pragmatic%2Caps%2C197&sr=8-1
goodreadsLink: https://www.goodreads.com/book/show/52715562-the-pragmatic-programmer
thumbnail: assets/pragmatic.jpg
---

8 out of 10 this time around.

I had read the original book around 8-9 years ago. To be honest, it probably defined the engineer I am now, back then. I was kind of devastated with my first two professional experiences back in Turkey where there were either no engineering practices at all or if any, done poorly. So in the absence of a better example, this book is one of those books that I used to teach myself what software development profession must be like. The insights I got were definitely invaluable. For the 20th Anniversary Edition, Dave and Andy more or less rewrote all of the book and added some complete new sections to it (really good for my money). I still enjoyed the book a lot but this time I've seen some parts of that are a bit off to me which I highlight below. "**The Basic Tools**" section is still essential to all levels of software developers (with some minor exceptions).

## The good

- First of all, a confession: book starts its argument that as software developers we are responsible for our work and we should care about it, question it, and explore better ways of doing it all the time. This is a good wake up call to a cynical software engineer like me : ).
- The major benefit I got back then and also this time around is the concept of Tracer Bullets. Even though it's a military term, this concepts explains the importance of implementing a thin layer for the final application in an end to end fashion, thereby unearthing most roadblocks that can happen along the way in one go and gives the team a solid footing in the start of the project and what may happen next.
- Another major concept is the infamous "No Broken Windows" theory applied to software projects. This theory has its origins from the last years of the crime surge in United States (has had much worse implications for the ordinary and poor people by the way). When applied to software projects, this idea suggests that quality throughout the whole project must be upheld all the time, meaning all code should be easier to change, there should be no coupling between modules, modules should be as orthogonal as possible. And this brings us to the next topic below.
- Book really emphasises the importance about **testing**. To this end, it even goes on and destroys one of its staple ideas: **Don't Repeat Yourself**. There are more than a handful of sections dedicated to testing.
- Andy and Dave neatly summarises what it means to be **Agile**. They reiterate the famous "interactions with people over processes" and others and explain in more detail. It's really nice to explain that "agile" is not about tools and documents etc, but how you do your work. More on this on the other side below though.
- Functional programming is explained much better in this version. Authors explain the notion in Transforming Programming section, liken the idea to pipes in terminals (which is of course spot on), which also decreases the coupling in the system. Not sharing the state, another benefit of FP is also discussed in detail.
- The book further delivers blows to Object Oriented Programming with its "Inheritance Tax" section. This is again an established notion which some people also call "Favour Composition over Inheritance". I hope that more people would come to the idea that OOP is not a silver bullet and should not be the first go of every software project out there.

## The bad

- At one point Dave confesses that he doesn't write tests anymore! He justifies this with the fact that he is now a master programmer therefore, he doesn't need to write the tests, he writes his code "testable" anyway, meaning that the software he produces is already loosely coupled and well thought out with edge cases and contracts and so on. #praticewhatyoupreach
- Even though I really think that agile practices like estimations and user stories and others help with most of the corporate software we are building these days, authors should have asserted that some practices preached here is also not "One Size Fits All" ideas. This is still a minor point anyway.
- Furthermore, there's this nice concept of "Design by contract" which is a good precursor to Property Based Testing. But how to breach the gap between User Stories (which are vague statements basically) and "Contracts" (which is literally human language way of writing mathematical properties) is a bit left out. You might simply deduce from the fact that if you are Agile, you'd be talking to your user all the time, but I still think this constant communication with users is a waste of time for everyone involved.
- Despite the fact that (arguably) most of the audience of this book will be American readers, I found the tone a bit too American and prophet-like (of course you cannot compete with Bob Martin in this regard).
- There's just too much in the book. This makes it a bit hard to concentrate on what really matters (there are 53 topics inside the book!). I wished the authors would just pick up the core ideas and explain them in lengthier detail to make the point across better.
