import { useRouter } from 'next/router'

const FoodPic = (props) => {
  const router = useRouter()
  const { pid } = router.query


  return (
    <div>
      <p>FoodPic: {pid}</p>
      <img src={`${props.FoodPics.img}`}></img>
    </div>
  )
}

FoodPic.getInitialProps = async () => {
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
    FoodPics: data
  }
}

export default FoodPic