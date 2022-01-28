---
path: urlsearchparams
date: 2022-01-28T14:27:28.175Z
title: Handling query parameters in Javascript
---
Recently I found out that there’s a really neat way of dealing with query parameters in Javascript. After getting confused by lots of legacy code trying to string manipulate their way to obtain some simple values from a URL, this simple api really brightened my day so I wanted to share the light with other people 🙂. 

Say if you go to [https://www.mozilla.org/tr/firefox/95.0/whatsnew/?oldversion=93.0](https://www.mozilla.org/tr/firefox/95.0/whatsnew/?oldversion=93.0) and open DevTools and type the following: 

```jsx
const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
console.log(params['oldversion'])
```

You will get `"93.0"` in the console as expected. This web api capability has been there for a while in most browsers, like Chrome 49 so feel free to use it in your code whenever you require it. 

The only gotcha I’d point out that it doesn’t work well with full url strings. That’s why in the above example I used `[window.location.search](http://window.location.search)` which gives you the string `"?oldversion=93.0"` . 

Happy coding!