import Link from 'next/link'

const index = () => (
  <div>
    <h1>Hello?</h1>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <Link href='/food'>
      <a>Foods</a>
    </Link>

  </div>
)

export default index