import connect from 'next-connect'
import middlewares from '../../lib/middlewares'

import { getAuthorizationInfo } from '../../lib/oauth2'

const handler = connect()
handler.use(middlewares)

handler.get(async (req, res) => {
  const info = await getAuthorizationInfo()
  req.session.auth = {
    request: info
  }
  res.redirect(info.url)
})

export default handler
