
import React, {Component} from 'react'
import SongItemModal from './SongItemModal'
import {Item, Modal} from 'semantic-ui-react'
// trigger={<Button size="tiny" compact>More Info</Button>}
class SongItem extends Component {
  state = {
    open: false
  }

  onClose = () => this.setState({open: false});
  openModal = () => this.setState({open: true})

  render() {
    return (
      <Item onClick={this.openModal}>
        <Item.Image size='mini' src={require('../img/image.png')} />

        <Item.Content>
          <Item.Header>{this.props.song.name}</Item.Header>
          <Item.Meta>{this.props.song.artist} - {this.props.song.album}</Item.Meta>
        </Item.Content>
        <Modal open={this.state.open} onClose={this.onClose} centered={false}>
          <SongItemModal song={this.props.song} />
        </Modal>
      </Item>
    )
  }
}

export default SongItem
