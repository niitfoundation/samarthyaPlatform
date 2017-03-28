const path = require('path');
const extend = require('util')._extend;

const development = require('./env/DEV');
const production = require('./env/PROD');

// method to load ENV.json file to process the ENV variable if file exists
function loadEnvVariables() {
  const fs = require('fs');
  const envFile = path.join(__dirname, 'ENV.json');

  let env = {};

  if (fs.existsSync(envFile)) {
    env = fs.readFileSync(envFile, 'utf-8');
    env = JSON.parse(env);
    Object.keys(env).forEach(key => process.env[key] = env[key]);
  }
}

const defaults = {
  SERVER_ROOT: path.resolve(__dirname, '../'),
  NODE_ENV: process.env.NODE_ENV
};

const appConfig = {
  development: extend(development, defaults),
  production: extend(production, defaults)
};

module.exports = appConfig[(process.env.NODE_ENV || 'development')];
