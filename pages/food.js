import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Food = (props) => {
  

  return (
    <div>
      <h1>Food</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <div>
      {
        props.Foods.map(Food => (
          <li key={Food.id}>
            <Link href={`food/${Food.id}`}>
              <a>{Food.name}</a>
            </Link>
          </li>
      )
      )}</div>
    </div>
  )
}

Food.getInitialProps = async () => {
  const res = await fetch('https://young-mesa-11204.herokuapp.com/candidates',
  {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    worldcupName: '한양대 맛집 월드컵'
  })
}
)
  const data = await res.json()
  return {
    Foods: data
  }
}

export default Food