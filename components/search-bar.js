import styled from 'styled-components'
import Link from 'next/link'

const SearchBarText = styled.span`
  display: inline-block;
  margin-right: 15px;
`

const SearchBarInput = styled.input`
  width: 30%;
  padding: 3px 10px;
  margin-right: 15px;
`

const Btn = styled.button`
  padding: 3px 10px;
  margin-right: 15px;
`

const FindBnt = styled(Btn)`
`

const ToLikedVideosBtn = styled(Btn)`
  margin-left: 330px;
`


export default function SearchBar({chanelName, setChanelName,
                                    setVideos}) {

  function onInputChange(e) {
    setChanelName(e.target.value)
  }

  function getData(fetchLink) {
    return fetch(fetchLink, {
      headers: new Headers({
        'Authorization': 'Bearer 2s2k2hv9lnmfj8ov1rmttv91l9q8vb',
        'Client-Id': 's48uvny0btj4xnmgv8gakjby24il18'
      })
    })
      .then(res => res.json())
  }

  function find() {
    const fetchLinkToUserId = 'https://api.twitch.tv/helix/users?login=lck'

    // first get user_id
    getData(fetchLinkToUserId)
      .then(({data}) => {
        const user_id = data[0].id
        const fetchLinkToUserVideos = `https://api.twitch.tv/helix/videos?user_id=${user_id}`
        // second get last videos
        return getData(fetchLinkToUserVideos)
      })
      .then(({data}) => {
        // create an array of videos
        const videosFromData = data.map(({thumbnail_url, title, url}) => ({
          thumbnail_url: thumbnail_url
            .replace('%{width}', '308')
            .replace('%{height}', '173'),
          title,
          url
        }))

        setVideos(videosFromData)
      })
  }

  return (
    <div>
      <SearchBarText>Add chanel name</SearchBarText>
      <SearchBarInput
        type="text"
        placeholder="Chanel name"
        value={chanelName}
        onChange={onInputChange}
      />
      <FindBnt onClick={find}>Find</FindBnt>
      <Link href="/liked">
        <ToLikedVideosBtn>go to liked</ToLikedVideosBtn>
      </Link>
    </div>
  )
}