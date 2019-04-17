
import React, {Component} from 'react'
import ArtistSimilarArtistsModalItem from './ArtistSimilarArtistsModalItem'
import {Modal, Header, Table} from 'semantic-ui-react'
import {createLastFMClient} from '../LastFM'

class ArtistSimilarArtistsModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      similarArtists: []
    }
  }

  componentDidMount() {
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
          <Header as="h3">Similar Artists:</Header>
          <Table celled selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Artist Name</Table.HeaderCell>
                <Table.HeaderCell width={1}>Add</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.similarArtists.map((a, index) => <ArtistSimilarArtistsModalItem key={index} artist={a} />)}
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

export default ArtistSimilarArtistsModal
