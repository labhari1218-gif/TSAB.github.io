const { createVercelBeginHandler } = require("netlify-cms-oauth-provider-node");
const { getOauthConfig } = require("../lib/env");

module.exports = async function authHandler(req, res) {
  const config = getOauthConfig("auth");
  const handler = createVercelBeginHandler(config);
  return handler(req, res);
};
