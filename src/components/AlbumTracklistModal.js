
import React, {Component} from 'react'
import {Modal, Header, Table} from 'semantic-ui-react'
import AlbumTracklistModalItem from './AlbumTracklistModalItem'

class AlbumTracklistModal extends Component {

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Modal.Header as="h2">{this.props.album.name} - {this.props.album.artistName}</Modal.Header>
          <Header as="h3">Tracklist:</Header>
          <Table celled selectable striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center" width={1}>#</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>Duration</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell width={1}>Add</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.album.tracks.map((t,index) => <AlbumTracklistModalItem key={index} track={t} trackNumber={index + 1} image={this.props.album.images[3]} />)}
            </Table.Body>
          </Table>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

export default AlbumTracklistModal
