---
path: dates_in_js
date: 2022-04-17T14:25:58.432Z
title: Sorting and validating string dates in Javascript
---
## Dates

We have to handle dates as strings every day. The HTTP protocol doesn’t have any idea of a type, so we generally convey data in a json format and use strings for dates (it’s also recommended that we keep dates in ISO 8601 format: [](https://en.wikipedia.org/wiki/ISO_8601)<https://en.wikipedia.org/wiki/ISO_8601>).

This creates two problems, picking out the valid ones from an array of strings and sorting them. I’ll start with the validation of string dates.

## Validating dates

So, one of the easiest way to validate string dates is to convert them to Date objects and check their return value from `getTime()` function call. An invalid date object will return the NaN object for `getTime`. And the NaN object is not equal to itself for some of the reasons outlined here: [](https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values/1573715#1573715)<https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values/1573715#1573715>

So this information above could be utilised as follows:

```jsx
const dates = ['foo', '2022/04/17']

const validDates = dates.filter((d) => {
  const rd = new Date(d)
  return rd.getTime() === rd.getTime()
})

console.log(validDates)
// will print [ '2022/04/17' ]
```

Tada 🎉!

## Sorting dates

A very basic and nice way of sorting dates is literally to turn your strings into dates, and then subtract them to get a value that is either negative, positive, or zero.

```jsx
const dates = ['2022/04/17', '1986/03/30']

const sorted = dates.sort((d1, d2) => {
  return new Date(d1) - new Date(d2)
})

console.log(sorted)
// will print [ '1986/03/30', '2022/04/17' ]

```

Hopefully this post would help anyone who is looking for a clean solution to these two generic and frequent problems we face every other day!

PS: It’s amazing how the sort function interface is this lean!