# React useEffect Hook Bug

This repository demonstrates a common bug related to the `useEffect` hook in React.  The issue lies in the incorrect understanding and implementation of the dependency array.  Even with an empty dependency array (`[]`), the `useEffect` might still run more than once, potentially leading to unexpected behavior and performance issues.

## Bug Description
The `useEffect` hook is intended to perform side effects after every render. An empty dependency array `[]` is typically used to ensure the effect runs only once after the initial render, often for setup or cleanup tasks.  However, a misunderstanding or improper usage of the dependency array can lead to the effect running on every render.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs; the effect runs more often than expected.

## Solution
The corrected code ensures the effect runs only once after the initial render by properly utilizing the empty dependency array. The `console.log` statement will now show that the effect is triggered only once after the component mounts.