module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "015f42fb43293e47e25d45b0b2cb3a8d"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "QGbmWZypxGPAzNQMicElBg=="),
  },
});
