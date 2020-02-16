import connect from 'next-connect'
import middlewares from '../../lib/middlewares'
import { authUser } from '../../lib/oauth2'

const handler = connect()
handler.use(middlewares)

handler.get(async (req, res) => {
  if (!req.session.auth || !req.session.auth.access) {
    return res.status(401).send('access denied')
  }

  res.status(200).json(await authUser(req.session.auth.access))
})

export default handler
