const { createVercelCompleteHandler } = require("netlify-cms-oauth-provider-node");
const { getOauthConfig } = require("../lib/env");

module.exports = async function callbackHandler(req, res) {
  const config = getOauthConfig("callback");
  const handler = createVercelCompleteHandler(config);
  return handler(req, res);
};
