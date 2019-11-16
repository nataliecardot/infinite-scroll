# infinite-scroll

Infinite scroll built with Node, Express, React, and the Unsplash API.

## Quick Start

```bash
# Install dependencies
npm install

# Run Node server with Nodemon and start React development server from client folder
npm run dev
```

## Notes

[`unsplash-js`](https://github.com/unsplash/unsplash-js) is a server-side wrapper for the Unsplash API. `node-fetch` is used to make requests to the Unsplash API and is a dependency of `unsplash-js`. Using the [`babel-register`](https://babeljs.io/docs/en/6.26.3/babel-register) hook, JavaScript files are automatically compiled on the fly. [`concurrently`](https://www.npmjs.com/package/concurrently) is being used to run a Node server and a React front-end development server at the same time.