// module.exports = {
//   ACCESS_KEY: process.env.ACCESS_KEY,
//   SECRET: process.env.SECRET,
//   CALLBACK_URL: process.env.CALLBACK_URL // Running Node server on 5000, React on 3000
// };
module.exports = {
  ACCESS_KEY: process.env.ACCESS_KEY || 'a3405588cb41efcbc710e498becb76a14b637ab20d3197aca4dc4726ad647709',
  SECRET: process.env.SECRET || '7f9afb5ed568c235b9a06b90dd2ef288fd93c22db22ffb6c6adcdc99a8e81cc8',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000' // Running Node server on 5000, React on 3000
};
