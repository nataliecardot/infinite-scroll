global.fetch = require('node-fetch');
const config = require('universal-config');
const Unsplash = require('unsplash-js').default; // There are multiple exports -- we want the default
const toJson = require('unsplash-js').toJson;
const express = require('express');

const unsplash = new Unsplash({
  accessKey: config.get('ACCESS_KEY'),
  secret: config.get('SECRET'),
  callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos', (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then(json => res.json(json))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));