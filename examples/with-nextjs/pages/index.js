import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

function fetcher(url) {
  return fetch(url).then(r => r.json())
}

function HomePage() {
  const { data, error } = useSWR('/api/user', fetcher)
  console.log(data, error)

  return (
    <div>
      <h1>Goodreads API Example</h1>
      <Link href="/api/login">
        <a>
          <img src={process.env.GOODREADS_LOGIN_IMAGE} />
        </a>
      </Link>

      {data && (
        <div>
          <p>{data.access.token}</p>
          <p>{data.access.tokenSecret}</p>
        </div>
      )}
    </div>
  )
}

export default HomePage
