
import React, {Component} from 'react'
import SongItemModal from './SongItemModal'
import {Item, Button, Modal, Icon} from 'semantic-ui-react'
import {unfavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SongItem extends Component {

  playButton = () => {
    return (
      <Button inverted color="vk" size="tiny" compact animated>
        <Button.Content visible>Preview</Button.Content>
        <Button.Content hidden>
          <Icon name="play" />
        </Button.Content>
      </Button>
    )
  }

  render() {
    return (
      <Item onClick={this.openModal}>
        <Item.Image size='mini' src={this.props.song.album.image} alt={'album-art'} />

        <Item.Content>
          <Item.Header>{this.props.song.name.slice(0,60)}</Item.Header>
          <Item.Meta>{this.props.song.artist} - {this.props.song.album.name}</Item.Meta>
        </Item.Content>
        <Modal trigger={this.playButton()} centered={false} basic>
          <SongItemModal song={this.props.song} />
        </Modal>
        <Button inverted color="linkedin" size="mini" floated="right" onClick={()=>this.props.unfavoriteSong(this.props.song, this.props.user.id)}>Unfavorite</Button>
      </Item>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    unfavoriteSong: (song, id) => dispatch(unfavoriteSong(song, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongItem)
