# infinite-scroll

Infinite scroll built with Node, Express, React, and the Unsplash API.

## Quick Start

```bash
# Install dependencies (will also need to install dependencies from within client directory, the front end)
npm install

# Run Node server with Nodemon and start React development server from client folder (runs both front and back end)
npm run dev
```

## Notes

Back end:

[`unsplash-js`](https://github.com/unsplash/unsplash-js) is a server-side wrapper for the Unsplash API. `node-fetch` is used to make requests to the Unsplash API and is a dependency of `unsplash-js`. Using the [`babel-register`](https://babeljs.io/docs/en/6.26.3/babel-register) hook, JavaScript files are automatically compiled on the fly. [`concurrently`](https://www.npmjs.com/package/concurrently) is being used to run a Node server and a React front-end development server at the same time.

Front end:

`create-react-app` was used to bootstrap the app and is contained within the `client` directory (the app's front end). `axios` is used to make requests to the back end (but the Fetch API may be used instead later).