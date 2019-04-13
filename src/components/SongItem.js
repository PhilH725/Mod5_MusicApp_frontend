
import React, {Component} from 'react'
import SongItemModal from './SongItemModal'
import {Item, Button, Modal} from 'semantic-ui-react'
import {unfavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SongItem extends Component {
  state = {
    open: false
  }

  onClose = () => this.setState({open: false});
  openModal = () => this.setState({open: true})

  render() {
    return (
      <Item onClick={this.openModal}>
        <Item.Image size='mini' src={this.props.song.album.image} alt={'album-art'} />

        <Item.Content>
          <Item.Header>{this.props.song.name.slice(0,60)}</Item.Header>
          <Item.Meta>{this.props.song.artist} - {this.props.song.album.name}</Item.Meta>
        </Item.Content>
        <Modal trigger={<Button size="tiny" compact>More Info</Button>} centered={false}>
          <SongItemModal song={this.props.song} />
        </Modal>
        <Button size="mini" floated="right" onClick={()=>this.props.unfavoriteSong(this.props.song, this.props.user.id)}>Unfavorite</Button>
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
