
import React from 'react'
import {Table, Button, Image} from 'semantic-ui-react'

const ArtistAlbumsModalItem = (props) => {

  const favoriteButton = () => {
    return (
      <Button inverted color="linkedin" onClick={()=>console.log(props)}>
        Favorite
      </Button>
    )
  }

  return (
    <Table.Row>
      <Table.HeaderCell><Image src={props.album.images[3]} alt={"album-art"} size="tiny"/></Table.HeaderCell>
      <Table.HeaderCell>{props.album.name}</Table.HeaderCell>
      <Table.HeaderCell>{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

export default ArtistAlbumsModalItem
