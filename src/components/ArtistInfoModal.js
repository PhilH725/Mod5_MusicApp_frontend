
import React from 'react'
import {Modal} from 'semantic-ui-react'

const ArtistInfoModal = (props) => {

  return (
    <Modal.Content>
      <Modal.Description>
        <Modal.Header>{props.artist.name}</Modal.Header>
        <h2>(pretend more info is here)</h2>
      </Modal.Description>
    </Modal.Content>
  )
}

export default ArtistInfoModal
