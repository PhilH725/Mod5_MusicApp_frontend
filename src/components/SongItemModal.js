
import React, {Component} from 'react'
import {Modal, Header, Divider} from 'semantic-ui-react'
import {getVideoId, toggleMusicPlayback} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SongItemModal extends Component {

  componentDidMount() {
    this.props.getVideoId(this.props.song.name, this.props.song.artist)
    this.props.toggleMusicPlayback()
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header id="youtube-modal-name-header" as="h2">{this.props.song.name}</Header>
          <Header id="youtube-modal-info-header" as="h3">{this.props.song.artist} - {this.props.song.album.name}</Header>
          <Divider />
          {this.props.videoId.length > 0 ?
          <div id="youtube-video-container">
            <iframe id="youtube-video-player" title="song" src={`https://www.youtube.com/embed/${this.props.videoId}`}>
            </iframe>
          </div>
          :
          <h2>Loading video...</h2>}
        </Modal.Description>
      </Modal.Content>
    )
  }
}
// src="https://www.youtube.com/embed/emGri7i8Y2Y"
// https://www.youtube.com/watch?v=emGri7i8Y2Y

const mapStateToProps = state => ({
  videoId: state.videoId
})

const mapDispatchToProps = dispatch => ({
  getVideoId: (song, artist) => dispatch(getVideoId(song, artist)),
  toggleMusicPlayback: () => dispatch(toggleMusicPlayback())
})

export default connect(mapStateToProps, mapDispatchToProps)(SongItemModal)
