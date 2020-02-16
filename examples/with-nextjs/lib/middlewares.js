import nextConnect from 'next-connect'
import nextSession from 'next-session'

function session(req, res, next) {
  return nextSession()(req, res, next)
}

function compat(req, res, next) {
  res.redirect = (code, path) => {
    let location = path
    let status = code
    if (typeof code === 'string') {
      status = 302
      location = code
    }
    res.statusCode = status
    res.setHeader('Location', location)
    res.end()
  }
  next()
}

const handler = nextConnect()
handler.use(compat)
handler.use(session)

export default handler
