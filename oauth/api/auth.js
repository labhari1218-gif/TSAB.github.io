const { createVercelBeginHandler } = require("netlify-cms-oauth-provider-node");

module.exports = createVercelBeginHandler({
  origin: process.env.ORIGIN,
  adminPanelUrl: process.env.ADMIN_PANEL_URL,
  completeUrl: process.env.COMPLETE_URL,
  oauthClientID: process.env.OAUTH_CLIENT_ID,
  oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
  oauthProvider: "github"
});
