
import React, {Component} from 'react'
import ArtistInfoModalTrackList from './ArtistInfoModalTrackList'
import {Modal, Header, Table} from 'semantic-ui-react'
import {createLastFMClient} from '../LastFM'

class ArtistTopTracksModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topTracks: []
    }
  }

  componentDidMount() {
    createLastFMClient().artistTopTracks({ name: this.props.artist.name }, (err, data) => {
      let topTracks = data.result.slice(0,20)
      this.setState({topTracks})
    })
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Modal.Header as="h2">{this.props.artist.name}</Modal.Header>
          <Header as="h3">Top Tracks:</Header>
          <Table celled selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Track Name</Table.HeaderCell>
                <Table.HeaderCell width={2}>Listeners</Table.HeaderCell>
                <Table.HeaderCell width={1}>Add</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.topTracks.map((t, index) => <ArtistInfoModalTrackList key={index} track={t} />)}
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

export default ArtistTopTracksModal
