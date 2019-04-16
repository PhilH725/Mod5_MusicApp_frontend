
import React from 'react'
import {Table, Button} from 'semantic-ui-react'

const ArtistSimilarArtistsModalItem = (props) => {

  const favoriteButton = () => {
    return (
      <Button inverted color="linkedin" onClick={()=>console.log(props)}>
        Favorite
      </Button>
    )
  }

  return (
    <Table.Row>
      <Table.HeaderCell>{props.artist.name}</Table.HeaderCell>
      <Table.HeaderCell>something</Table.HeaderCell>
      <Table.HeaderCell>{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

export default ArtistSimilarArtistsModalItem
