const base = require('./config/base');
const content = require('./config/content');
const meta = require('./config/meta');
const options = require('./config/options');
const plugins = require('./config/plugins');

module.exports = {
  ...base,
  ...content,
  ...meta,
  ...options,
  ...plugins,
}
