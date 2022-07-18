const purgecss = require('./purgecss.config.js').default;

const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer,
    purgecss,
  ]
}
