
import React from 'react'
import SongItemModal from './SongItemModal'
import {Item, Modal, Button} from 'semantic-ui-react'

const SongItem = (props) => {

  return (
    <Item>
      <Item.Image size='mini' src={require('../img/image.png')} />

      <Item.Content>
        <Item.Header>{props.song.name}</Item.Header>
        <Item.Meta>{props.song.artist} - {props.song.album}</Item.Meta>
      </Item.Content>
      <Modal trigger={<Button size="tiny" compact>More Info</Button>} centered={false}>
        <SongItemModal song={props.song} />
      </Modal>
    </Item>

  )
}

export default SongItem
