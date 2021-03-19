import Link from 'next/link'
import Image from '../Components/image'

const about = () => (
  <div style={{fontSize: '20px', color: 'red'}}>
    <h1>About</h1>
    <Image />
    <Link href='/'>
      <a>Home</a>
    </Link>
  </div>
)

export default about