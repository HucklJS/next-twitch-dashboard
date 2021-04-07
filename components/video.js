import styled from 'styled-components'
import React from "react"

const OverlayInfo = styled.a`
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
`

const VideoWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: center;
  &:hover ${OverlayInfo} {
    display: block;
  }
`

const VideoTitle = styled.div`
  margin-bottom: 25px;
`

export default function Video({thumbnail_url, title, url, children}) {
  return (
    <VideoWrap>
      <img
        src={thumbnail_url} // Route of the image file
        height={173} // Desired size with correct aspect ratio
        width={308} // Desired size with correct aspect ratio
        alt={title}
      />
      <OverlayInfo href={url}>
        <VideoTitle>{title}</VideoTitle>
        {children}
      </OverlayInfo>
    </VideoWrap>
  )
}