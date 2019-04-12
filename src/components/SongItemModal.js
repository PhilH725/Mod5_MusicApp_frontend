
import React from 'react'
import {Modal, Header} from 'semantic-ui-react'

const SongItemModal = (props) => {

  return (
    <Modal.Content>
      <Modal.Description>
        <Header>{props.song.name}</Header>
        <p>Artist: {props.song.artist}</p>
        <p>Album: {props.song.album.name}</p>
      </Modal.Description>
    </Modal.Content>
  )
}

export default SongItemModal
