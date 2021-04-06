import Head from 'next/head'
import Layout from  '../components/layout'
import SearchBar from  '../components/search-bar'
import Video from  '../components/video'
import styled from 'styled-components'
import React from "react"

const SearchBarWrap = styled.div`
  padding: 10px 0;
  background-color: #f0fab4;
`

const VideosContainer = styled.div`
  padding: 20px 0
`


export default function Home() {
  const [chanelName, setChanelName] = React.useState('')
  const [videos, setVideos] = React.useState([])



  const searchBarProps = {
    chanelName,
    setChanelName,
    setVideos
  }

  return (
      <>

        <Head>
          <title>Search twitch videos</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchBarWrap>
          <Layout>
            <SearchBar {...searchBarProps}/>
          </Layout>
        </SearchBarWrap>
        <VideosContainer>
          <Layout>
            {videos.map(video => {
              return <Video {...video}/>
            })}
          </Layout>
        </VideosContainer>

      </>
  )
}
