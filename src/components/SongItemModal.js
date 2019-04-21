
import React, {Component} from 'react'
import {Modal, Header, Divider} from 'semantic-ui-react'

class SongItemModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoId: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/get_song_url', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        songName: this.props.song.name,
        artistName: this.props.song.artist
      })
    })
    .then(res => res.json())
    .then(id => this.setState({videoId: id.id}))
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header id="youtube-modal-name-header" as="h2">{this.props.song.name}</Header>
          <Header id="youtube-modal-info-header" as="h3">{this.props.song.artist} - {this.props.song.album.name}</Header>
          <Divider />
          {this.state.videoId.length > 0 ?
          <div id="youtube-video-container">
          <iframe id="youtube-video-player" title="song" src={`https://www.youtube.com/embed/${this.state.videoId}`}>
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

export default SongItemModal
