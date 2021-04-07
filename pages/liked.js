import Head from 'next/head'
import Layout from  '../components/layout'
import Video from  '../components/video'
import styled from 'styled-components'
import React from "react"
import Link from "next/link"

const BackBtnWrap = styled.div`
  padding: 10px 0;
  background-color: #f0fab4;
`

const Btn = styled.button`
  padding: 3px 10px;
  margin-right: 15px;
`

const VideosContainer = styled.div`
  padding: 20px 0
`

export default function Liked({likedVideos}) {
  return (
    <>
      <Head>
        <title>Liked twitch videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackBtnWrap>
        <Layout>
          <Link href="/">
            <Btn>back</Btn>
          </Link>
        </Layout>
      </BackBtnWrap>
      <VideosContainer>
        <Layout>
          {likedVideos.map(video => {
            return <Video {...video} key={video.url}/>
          })}
        </Layout>
      </VideosContainer>
    </>
  )
}