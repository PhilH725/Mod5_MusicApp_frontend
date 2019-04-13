
import React from 'react'
import {List} from 'semantic-ui-react'

const ArtistInfoModalTrackList = (props) => {

  return (
    <List.Item>
      {props.track.name}
    </List.Item>
  )
}

export default ArtistInfoModalTrackList
