import styled from 'styled-components'
import Link from 'next/link'
import getData from  '../frontend-api/get-data'

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

  function find() {
    if (chanelName === '') {
      return alert('Please input chanel name')
    }
    const fetchLinkToUserId =
      `https://api.twitch.tv/helix/users?login=${chanelName.toLowerCase()}`

    // first get user_id
    getData(fetchLinkToUserId)
      .then(({data}) => {
        if (!data.length) throw new Error('didn\'t find user')
        const user_id = data[0].id
        const fetchLinkToUserVideos =
          `https://api.twitch.tv/helix/videos?user_id=${user_id}`
        // second get last videos
        return getData(fetchLinkToUserVideos)
      })
      .then(({data}) => {
        if (!data.length) throw new Error(`didn't find ${chanelName}\'s videos`)
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
      .catch(err => alert(err))
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