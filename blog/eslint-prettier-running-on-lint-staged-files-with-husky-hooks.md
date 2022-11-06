---
path: eslint-prettier-setup-with-husky
date: 2022-11-06T11:34:13.769Z
title: Eslint + Prettier  running on lint-staged files with Husky hooks
---
I know there are tons of blog posts out there showing you how to set up the nice tools of `Eslint` and `Prettier` and a lot of posts about using a Git commit hook (we’ll use `Husky` in this case) with git stage level linting but I never found that golden blog where they list the required steps to give you some piece of mind with your commits and builds in one; so I had to write this one out for myself! I hope this would be useful both to me and everyone else stumbling here! 😉

### Disclaimer

Note, I tried the below commands with both Vite.js and Create React App using npm version `8.9.1` and node version `v18.9.0` . I haven’t tested below with `yarn` but let me know if you have errors, i’ll be more than happy to help!

## Quick Summary

1. We are going to be using the wonderful tools Eslint and Prettier. They make collaboration much easier (because we all write uniform code as much as possible) than it used to be and makes your code safer, more correct and honestly prettier 😊. 
2. The idea is to use these tools with their fixing mode whenever we commit something. To achieve this hefty goal, we need two other tools: 
    1. `Husky` will be our Git pre commit hook, where it will run a script every time we try to commit. 
    2. `lint-staged` is the tool where we’ll run scripts against the staged files in our local Git repo. 

So, let’s begin 🎉!

## First Eslint and Prettier

We’ll start with installing the foundational tools Eslint and Prettier:

```bash
npm install --save-dev eslint
npm install --save-dev --save-exact prettier
```

Yarn versions:

```jsx
yarn add --dev eslint
yarn add --dev --save-exact prettier
```

## Then we configure

We’ll need to run `npm init @eslint/config` to go through the quick start for Eslint. You can see below the answers I gave.

```bash

npm init @eslint/config
Need to install the following packages:
  @eslint/create-config@0.4.1
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

Then we run:

```bash
npx eslint src
```

Which will give you several errors (if not, go and put some console.log to your code, it should compain about that). 

Then we add these commands to your package.json’s scripts object: 

```bash
"lint": "eslint src --ext .js,.jsx,.ts,.tsx",
"lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix"
```

`lint:fix` will try to fix as many issues as it can (like adding semicolons to your statements, with the above configuration)

Then we run:

```bash
npm install --save-dev eslint-config-prettier
```

or with yarn: 

```bash
yarn add --dev eslint-config-prettier
```

to remove conflicting rules between eslint and prettier; so make sure prettier is on the last line of plugins, example: 

```jsx
extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
```

Since you now have prettier in place, you can add these two commands to your package.json as well: 

```json
"prettier": "npx prettier src --check",
"prettier:fix": "npm run prettier -- --write"
```

(You can replace npm with yarn, if you’re using yarn for package manager)

Where again `prettier:fix` will try to fix as many issues as it can, like single or double quotes etc. (In this example case, it will make all strings double quoted)

We now can join forces of prettier and eslint together by creating another script called `format`:  

```jsx
"format": "npm run lint:fix && npm run prettier:fix",
```

You can then add formatting as a part of the build process by adding `npm run format` to the build script you have, in this case: 

```jsx
"build": "npm run format && react-scripts build",
```

(The point is to just adding `npm run format` before your actual build command, example uses Create React app which is not very fashionable these days, use `Vite.js` instead :) ) 

I then strongly urge you to download Prettier and Eslint for your IDE (I use VSCode) and enable them to run on code changes, which will save you a lot of time. 

## Then husky and lint-staged

Now we need something to run these tools for us every time we try to commit something. As we noted above, `lint-staged` is a known tool for that kind of work. But even then, we need a way to run these as commit hooks. `Husky` comes into play for these types of actions!

Initially run: 

```jsx
npx husky install
npx husky add .husky/pre-commit "npm run lint-staged"
```

Then run 

```jsx
npm install husky lint-staged
```

Don’t forget to add the `husky-install` script to your package.json

```jsx
"husky-install": "husky install .husky"
```

Also we need to generate a `.lintstagedrc.js` file in the root folder with the content: 

```jsx
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint src --quiet --fix'],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
};
```

`Vite` users might want to remove the `src` from `eslint` command in case it errors out with `No files matching the pattern "src" were found` . 

We need to use this file from our package.json, don’t we? 

```jsx
"lint-staged": "lint-staged --config .lintstagedrc.js"
```

And voila! Every time you try to commit, these tools will keep reminding you to write the best possible code! Better yet, as I discussed it above, try Eslint and Prettier’s IDE integrations and extensions to save you further time. 

Isn’t it amazing not to talk about code styling in code reviews any longer? 

References: 

- Vite.js [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- Prettier [https://prettier.io/](https://prettier.io/)
- Eslint [https://eslint.org/](https://eslint.org/)
- Husky [https://typicode.github.io/husky/#/](https://typicode.github.io/husky/#/)
- lint-staged https://github.com/okonet/lint-staged