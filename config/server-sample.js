module.exports = {
  ACCESS_KEY: process.env.ACCESS_KEY || 'Unsplash API key here',
  SECRET: process.env.SECRET || 'Unsplash API secret here',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000' // Running Node server on 5000, React on 3000
};
