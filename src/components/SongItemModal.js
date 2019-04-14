
import React, {Component} from 'react'
import {Modal, Header} from 'semantic-ui-react'

// , {
//   headers: {ab: 'GET'},
//   body: JSON.stringify({songName: this.props.song.name, artistName: this.props.song.artistName})
// })
class SongItemModal extends Component {

  componentDidMount() {
    fetch('http://localhost/3000/users/get_song_url', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        songName: this.props.song.name,
        artistName: this.props.song.artist
      })
    })
    .then(res => res.json())
    .then(id => console.log(id))
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header>{this.props.song.name}</Header>
          <iframe title="song" width="600" height="300" src="https://www.youtube.com/embed/emGri7i8Y2Y">
          </iframe>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

// https://www.youtube.com/watch?v=emGri7i8Y2Y

//track info doesnt really give me anything extra, so i dont know what 'more info' would be. im thinking about making this where i can play a single song by using this modal to house a youtube player...

export default SongItemModal
