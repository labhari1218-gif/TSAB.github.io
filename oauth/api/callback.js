const { coerceErrorToMessage } = require("netlify-cms-oauth-provider-node/lib/handlers/utils");
const { createProvider } = require("netlify-cms-oauth-provider-node/lib/providers");
const { getOauthConfig } = require("../lib/env");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderCallbackPage({ title, message, targetOrigin, adminPanelUrl }) {
  const safeTitle = escapeHtml(title);
  const safeAdminPanelUrl = escapeHtml(adminPanelUrl);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${safeTitle}</title>
    <style>
      body { font-family: sans-serif; text-align: center; padding: 2rem; }
      p { font-size: 1.1rem; }
      .note { color: #5b6475; font-size: 0.95rem; }
      a { color: #153a78; }
    </style>
  </head>
  <body>
    <p>${safeTitle}</p>
    <p class="note">If this window does not close automatically, return to the CMS tab.</p>
    <p class="note"><a href="${safeAdminPanelUrl}" target="_self" rel="noreferrer">Back to TSAB CMS</a></p>
    <script>
      (function () {
        var message = ${JSON.stringify(message)};
        var targetOrigin = ${JSON.stringify(targetOrigin)};
        if (window.opener) {
          window.opener.postMessage(message, targetOrigin);
          setTimeout(function () { window.close(); }, 150);
        }
      })();
    </script>
  </body>
</html>`;
}

module.exports = async function callbackHandler(req, res) {
  const config = getOauthConfig("callback");
  const provider = createProvider("github", config);
  const { code = null } = req.query || {};

  let message;
  let title;

  if (code) {
    try {
      const accessToken = await provider.exchangeAuthorizationCodeForToken(code);
      message = `authorization:github:success:${JSON.stringify({
        token: accessToken.token.access_token,
        provider: "github"
      })}`;
      title = "Logging you in via GitHub...";
    } catch (error) {
      const errorMessage = coerceErrorToMessage(error, { dev: true })
        .replace(/:/g, " - ")
        .replace(/(\r\n|\r|\n)/g, " - ");
      message = `authorization:github:error:${errorMessage}`;
      title = `An error occurred. Please close this page and try again. ${errorMessage}`;
    }
  } else {
    const errorMessage = "Invalid code received from GitHub or code could not be received.";
    message = `authorization:github:error:${errorMessage}`;
    title = `An error occurred. Please close this page and try again. ${errorMessage}`;
  }

  res.status(200);
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.send(
    renderCallbackPage({
      title,
      message,
      targetOrigin: config.origin,
      adminPanelUrl: config.adminPanelUrl
    })
  );
};
