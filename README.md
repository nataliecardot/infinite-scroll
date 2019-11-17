# infinite-scroll

Infinite scroll built with Node, Express, React, and the Unsplash API.

## Quick Start

```bash
# Install dependencies (will also need to install dependencies from within client directory, the front end)
npm install

# Run Node server with Nodemon and start React development server from client folder (runs both front and back end, Node on localhost:5000 and React on localhost:3000)
npm run dev
```

## Notes

Back end:

[`unsplash-js`](https://github.com/unsplash/unsplash-js) is a server-side wrapper for the Unsplash API. `node-fetch` is used to make requests to the Unsplash API and is a dependency of `unsplash-js`. Using the [`babel-register`](https://babeljs.io/docs/en/6.26.3/babel-register) hook, JavaScript files are automatically compiled on the fly. [`concurrently`](https://www.npmjs.com/package/concurrently) is being used to run a Node server and a React front-end development server at the same time.

Front end:

`create-react-app` was used to bootstrap the app and is contained within the `client` directory (the app's front end). `axios` is used to make requests to the back end (but the Fetch API may be used instead later).

Create React App runs the app on its own development server, so the front and back end could not be served on the same server and port as is commonly practiced for full-stack apps. To eliminate the need for rerouting requests to the back end server and setting CORS headers, proxying is used. The `package.json` file in the front end directory contains a `proxy` field that proxies non-text/html requests to the back-end server.