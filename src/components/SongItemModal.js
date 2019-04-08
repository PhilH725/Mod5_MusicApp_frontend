
import React from 'react'
import {Modal, Segment, Header} from 'semantic-ui-react'

const SongItemModal = (props) => {

  return (
    <Segment>
      <Modal.Content>
        <Modal.Description>
          <Header>{props.song.name}</Header>
          <p>Artist: {props.song.artist}</p>
          <p>Album: {props.song.album}</p>
        </Modal.Description>
      </Modal.Content>
    </Segment>
  )
}

export default SongItemModal
