// src/config/index.js
const env = process.env.NODE_ENV || "development";
const config = require(`./${env}.json`);
export default config;
