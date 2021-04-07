import '../styles/globals.css'
import React from "react"

function MyApp({ Component, pageProps }) {
  const [chanelName, setChanelName] = React.useState('')
  const [videos, setVideos] = React.useState([])
  const [likedVideos, setLikedVideos] = React.useState([])
  React.useEffect(() => {
    const videos = JSON.parse(
      localStorage.getItem('likedVideos')
    )
    setLikedVideos(videos ?? [])
  }, [])

  const store = {
    chanelName,
    setChanelName,
    videos,
    setVideos,
    likedVideos,
    setLikedVideos
  }

  return <Component {...pageProps} {...store}/>
}

export default MyApp
