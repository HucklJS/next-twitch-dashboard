import styled from 'styled-components'
import React from "react"
import Video from "./video"

const BtnUnlike = styled.button`
  padding: 5px;
  background-color: #9147ff;
  border: none;
  border-radius: 5px;
  &:hover, &:focus {
    background-color: #a66bff;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

export default function LikedVideo({thumbnail_url, title, url, likedVideos, setLikedVideos}) {
  function onBtnUnlikeClick(e) {
    e.preventDefault()

    const index = likedVideos.findIndex(video => {
      return video.thumbnail_url === thumbnail_url &&
        video.title === title &&
        video.url === url
    })
    if (index == null) return

    const newLikedVideos = [...likedVideos.slice(0, index), ...likedVideos.slice(index + 1)]
    localStorage.setItem('likedVideos', JSON.stringify(newLikedVideos))
    setLikedVideos(newLikedVideos)
  }

  return (
    <Video
      thumbnail_url={thumbnail_url}
      title={title}
      url={url}
    >
      <BtnUnlike onClick={onBtnUnlikeClick}>
        Unlike
      </BtnUnlike>
    </Video>
  )
}