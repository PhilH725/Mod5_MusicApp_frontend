
import React from 'react'
import {Table, Button} from 'semantic-ui-react'

const ArtistInfoModalTrackList = (props) => {

  const favoriteButton = () => {
    return (
      <Button inverted color="linkedin">
        Favorite
      </Button>
    )
  }

  return (
    <Table.Row>
      <Table.HeaderCell>{props.track.name}</Table.HeaderCell>
      <Table.HeaderCell>{props.track.listeners}</Table.HeaderCell>
      <Table.HeaderCell>{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

export default ArtistInfoModalTrackList
