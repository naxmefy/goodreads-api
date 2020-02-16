const dotenv = require('dotenv')
dotenv.config({ silent: true })

module.exports = {
  env: {
    GOODREADS_DOMAIN: process.env.GOODREADS_DOMAIN,
    GOODREADS_CLIENT_ID: process.env.GOODREADS_CLIENT_ID,
    GOODREADS_CLIENT_SECRET: process.env.GOODREADS_CLIENT_SECRET,
    GOODREADS_SCOPE: process.env.GOODREADS_SCOPE,
    GOODREADS_STATE: process.env.GOODREADS_STATE,
    GOODREADS_LOGIN_IMAGE: process.env.GOODREADS_LOGIN_IMAGE,
    REDIRECT_URI: process.env.REDIRECT_URI || 'http://localhost:3000/api/callback',
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000/',
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: 7200 // 2 hours
  }
}
