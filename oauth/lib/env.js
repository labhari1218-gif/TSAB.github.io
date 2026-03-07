const REQUIRED_ENV_KEYS = [
  "ORIGIN",
  "ADMIN_PANEL_URL",
  "COMPLETE_URL",
  "OAUTH_CLIENT_ID",
  "OAUTH_CLIENT_SECRET"
];

function asNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getDiagnostics(env) {
  return {
    hasOrigin: typeof env.ORIGIN === "string",
    hasAdminPanelUrl: typeof env.ADMIN_PANEL_URL === "string",
    hasCompleteUrl: typeof env.COMPLETE_URL === "string",
    hasOauthClientId: typeof env.OAUTH_CLIENT_ID === "string",
    hasOauthClientSecret: typeof env.OAUTH_CLIENT_SECRET === "string",
    originIsNonEmptyString: asNonEmptyString(env.ORIGIN),
    adminPanelUrlIsNonEmptyString: asNonEmptyString(env.ADMIN_PANEL_URL),
    completeUrlIsNonEmptyString: asNonEmptyString(env.COMPLETE_URL),
    oauthClientIdIsNonEmptyString: asNonEmptyString(env.OAUTH_CLIENT_ID),
    oauthClientSecretIsNonEmptyString: asNonEmptyString(env.OAUTH_CLIENT_SECRET)
  };
}

function getOauthConfig(context) {
  const diagnostics = getDiagnostics(process.env);
  console.log(`[oauth:${context}] env diagnostics`, diagnostics);

  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !asNonEmptyString(process.env[key]));
  if (missingKeys.length > 0) {
    throw new Error(`[oauth:${context}] Missing or invalid env vars: ${missingKeys.join(", ")}`);
  }

  return {
    origin: process.env.ORIGIN.trim(),
    adminPanelUrl: process.env.ADMIN_PANEL_URL.trim(),
    completeUrl: process.env.COMPLETE_URL.trim(),
    oauthClientID: process.env.OAUTH_CLIENT_ID.trim(),
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET.trim(),
    oauthProvider: "github"
  };
}

module.exports = {
  getOauthConfig
};
