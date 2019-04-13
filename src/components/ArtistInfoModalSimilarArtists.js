
import React from 'react'
import {List} from 'semantic-ui-react'

const ArtistInfoModalSimilarArtists = (props) => {

  return (
    <List.Item>
      {props.artist.name}
    </List.Item>
  )
}

export default ArtistInfoModalSimilarArtists
