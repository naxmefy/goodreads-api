import connect from 'next-connect'
import middlewares from '../../lib/middlewares'

import { getAccessToken } from '../../lib/oauth2'

const handler = connect()
handler.use(middlewares)

handler.get(async (req, res) => {
  req.session.auth.authorization = req.query
  try {
    req.session.auth.access = await getAccessToken(req.session.auth)
  } catch (e) {
    return res.json(e)
  }
  res.redirect('/')
})

export default handler
