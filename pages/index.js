import Head from 'next/head'
import Layout from  '../components/layout'
import SearchBar from  '../components/search-bar'
import UnlikedVideo from  '../components/unliked-video'
import styled from 'styled-components'
import React from "react"

const SearchBarWrap = styled.div`
  padding: 10px 0;
  background-color: #f0fab4;
`

const VideosContainer = styled.div`
  padding: 20px 0
`


export default function Home({chanelName, setChanelName,
                               videos, setVideos,
                               likedVideos, setLikedVideos}) {

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
              return <UnlikedVideo
                {...video}
                key={video.url}
                likedVideos={likedVideos}
                setLikedVideos={setLikedVideos}
              />
            })}
          </Layout>
        </VideosContainer>
      </>
  )
}
