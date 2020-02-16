import { OAuth } from 'oauth'
import * as config from './config'

const OAUTH_VERSION = '1.0A'
const AUTHORIZE_CALLBACK = null
const SIGNATURE_METHOD = 'HMAC-SHA1'

export const oauth = new OAuth(
  `${config.GOODREADS_DOMAIN}/oauth/request_token`,
  `${config.GOODREADS_DOMAIN}/oauth/access_token`,
  config.GOODREADS_CLIENT_ID,
  config.GOODREADS_CLIENT_SECRET,
  OAUTH_VERSION,
  AUTHORIZE_CALLBACK,
  SIGNATURE_METHOD
)

export async function getAuthorizationInfo() {
  const result = await new Promise((resolve, reject) => {
    oauth.getOAuthRequestToken({}, (error, token, tokenSecret, query) => {
      if (error) return reject(error)
      resolve({ token, tokenSecret, query })
    })
  })

  const { token, tokenSecret, query } = result
  return {
    url: `${config.GOODREADS_DOMAIN}/oauth/authorize?oauth_token=${result.token}&oauth_callback=${config.REDIRECT_URI}`,
    token,
    tokenSecret,
    query
  }
}

export async function getAccessToken(auth) {
  const result = await new Promise((resolve, reject) => {
    oauth.getOAuthAccessToken(
      auth.request.token,
      auth.request.tokenSecret,
      auth.authorization.oauth_token,
      (error, token, tokenSecret, query) => {
        if (error) return reject(error)
        resolve({ token, tokenSecret, query })
      }
    )
  })
  const { token, tokenSecret, query } = result
  return {
    token,
    tokenSecret,
    query
  }
}

export async function authUser(access) {
  return await new Promise((resolve, reject) => {
    oauth.get(
      `${config.GOODREADS_DOMAIN}/api/auth_user`,
      access.token,
      access.tokenSecret,
      (error, data) => {
        if (error) return reject(error)
        return resolve(data)
      }
    )
  })
}
