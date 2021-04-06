import styled from 'styled-components'
import React from "react"

const OverlayInfo = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`

const VideoWrap = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  &:hover ${OverlayInfo} {
    display: block;
  }
`


export default function Video({thumbnail_url, title, url}) {
  return (
    <VideoWrap>
      {/*<a href={url}>*/}
        <img
          src={thumbnail_url} // Route of the image file
          height={173} // Desired size with correct aspect ratio
          width={308} // Desired size with correct aspect ratio
          alt={title}
        />
      <OverlayInfo>
        <div className="video-title">{title}</div>
        <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
             className="ScSvg-sc-1j5mt50-1 jLaQtw" fill="white">
          <g>
            <path fill-rule="evenodd"
                  d="M9.171 4.171A4 4 0 006.343 3H6a4 4 0 00-4 4v.343a4 4 0 001.172 2.829L10 17l6.828-6.828A4 4 0 0018 7.343V7a4 4 0 00-4-4h-.343a4 4 0 00-2.829 1.172L10 5l-.829-.829zm.829 10l5.414-5.414A2 2 0 0016 7.343V7a2 2 0 00-2-2h-.343a2 2 0 00-1.414.586L10 7.828 7.757 5.586A2 2 0 006.343 5H6a2 2 0 00-2 2v.343a2 2 0 00.586 1.414L10 14.172z"
                  clip-rule="evenodd"></path>
          </g>
        </svg>
      </OverlayInfo>
      {/*</a>*/}
    </VideoWrap>
  )
}