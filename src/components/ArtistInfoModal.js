
import React, {Component} from 'react'
import ArtistInfoModalTrackList from './ArtistInfoModalTrackList'
import ArtistInfoModalSimilarArtists from './ArtistInfoModalSimilarArtists'
import {Modal, List, Header} from 'semantic-ui-react'
import {createLastFMClient} from '../LastFM'

class ArtistInfoModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topTracks: [],
      similarArtists: []
    }
  }

  componentDidMount() {
    createLastFMClient().artistTopTracks({ name: this.props.artist.name }, (err, data) => {
      let topTracks = data.result.slice(0,20)
      this.setState({topTracks})
    })
    createLastFMClient().artistSimilar({ name: this.props.artist.name }, (err, data) => {
      let similarArtists = data.artist.filter(a => a.match < .65).slice(0,15)
      this.setState({similarArtists})
    })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Modal.Header as="h2">{this.props.artist.name}</Modal.Header>
          <List divided>
            <Header as="h3">Top Tracks:</Header>
            {this.state.topTracks.map((t, index) => <ArtistInfoModalTrackList key={index} track={t} />)}
          </List>
          <List divided>
            <Header as="h3">Similar Artists:</Header>
            {this.state.similarArtists.map((a, index) => <ArtistInfoModalSimilarArtists key={index} artist={a} />)}
          </List>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

export default ArtistInfoModal
