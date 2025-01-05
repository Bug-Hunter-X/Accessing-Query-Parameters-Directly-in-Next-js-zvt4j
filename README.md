# Accessing Query Parameters Directly in Next.js

This repository demonstrates a common error in Next.js applications when trying to access query parameters directly using `window.location` within API routes or pages. This approach fails because the query parameters are not available in the browser's context during server-side rendering.

## Problem

The `about.js` file attempts to access query parameters using `window.location.search`.  This works in the browser, but not on the server during the initial render.  This results in undefined values.

## Solution

The `aboutSolution.js` file provides a corrected version using `useRouter` hook. This ensures that query parameters are correctly accessed after the client-side hydration.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about?name=John` in your browser. Observe that the name will appear correctly on the about page
5. Now open the browser's developer tools and look for any errors in the console. The original code will show an error on initial render, but the correct solution will render without any errors. 
