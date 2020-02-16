if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    GOODREADS_CLIENT_ID: process.env.GOODREADS_CLIENT_ID,
    GOODREADS_CLIENT_SECRET: process.env.GOODREADS_CLIENT_SECRET,
    GOODREADS_SCOPE: process.env.GOODREADS_SCOPE,
    GOODREADS_STATE: process.env.GOODREADS_STATE,
    GOODREADS_DOMAIN: process.env.GOODREADS_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME
  }
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    GOODREADS_CLIENT_ID: process.env.GOODREADS_CLIENT_ID,
    GOODREADS_SCOPE: process.env.GOODREADS_SCOPE,
    GOODREADS_DOMAIN: process.env.GOODREADS_DOMAIN,
    GOODREADS_LOGIN_IMAGE: process.env.GOODREADS_LOGIN_IMAGE,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI
  }
}
