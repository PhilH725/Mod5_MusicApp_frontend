
import React, {Component} from 'react'
import {Modal, Header} from 'semantic-ui-react'
import {createLastFMClient} from '../LastFM'

class SongItemModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      songData: {}
    }
  }

  componentDidMount() {
    createLastFMClient().trackInfo({ name: this.props.song.name, artistName: this.props.song.artist }, (err, data) => {
      this.setState({songData: data.result})
    })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header>{this.props.song.name}</Header>
          <p>Artist: {this.props.song.artist}</p>
          <p>Album: {this.props.song.album.name}</p>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

//track info doesnt really give me anything extra, so i dont know what 'more info' would be. im thinking about making this where i can play a single song by using this modal to house a youtube player...

export default SongItemModal
