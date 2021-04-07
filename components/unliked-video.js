import styled from 'styled-components'
import React from "react"
import Video from "./video"

const BtnLike = styled.button`
  padding: 5px 5px 0 5px;
  background-color: #9147ff;
  border: none;
  border-radius: 5px;
  &:hover, &:focus {
    background-color: #a66bff;
    cursor: inherit;
  }
  &:focus {
    outline: none;
  }
`

export default function UnlikedVideo({thumbnail_url, title, url, likedVideos, setLikedVideos}) {
  function onBtnLikeClick(e) {
    e.preventDefault()

    const isAlreadyLiked = likedVideos.find(video => {
      return video.thumbnail_url === thumbnail_url &&
        video.title === title &&
        video.url === url
    })
    if (isAlreadyLiked) return

    setLikedVideos([...likedVideos, {thumbnail_url, title, url}])
  }

  return (
    <Video
      thumbnail_url={thumbnail_url}
      title={title}
      url={url}
    >
      <BtnLike onClick={onBtnLikeClick}>
        <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
             className="ScSvg-sc-1j5mt50-1 jLaQtw" fill="white">
          <g>
            <path fillRule="evenodd"
                  d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                  clipRule="evenodd"></path>
          </g>
        </svg>
      </BtnLike>
    </Video>
  )
}