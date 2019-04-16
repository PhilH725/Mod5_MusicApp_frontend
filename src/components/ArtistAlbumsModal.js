
import React, {Component} from 'react'
import ArtistAlbumsModalItem from './ArtistAlbumsModalItem'
import {Modal, Table, Header} from 'semantic-ui-react'
import {createLastFMClient} from '../LastFM'

class ArtistAlbumsModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    createLastFMClient().artistTopAlbums({ name: this.props.artist.name }, (err, data) => {
      let albums = this.filterSearchResults(data.result).slice(0,10)
      this.setState({albums})
    })
  }

  filterSearchResults(albumData) {
    return albumData.filter(a => a.listeners > 100000 && a.name !== "(null)")
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Modal.Header>{this.props.artist.name}</Modal.Header>
          <Header as="h3">Similar Artists:</Header>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Album Art</Table.HeaderCell>
                <Table.HeaderCell>Album Name</Table.HeaderCell>
                <Table.HeaderCell>Favorite</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.albums.map((a, index) => <ArtistAlbumsModalItem key={index} album={a} />)}
            </Table.Body>
          </Table>

        </Modal.Description>
      </Modal.Content>
    )
  }
}
// <List celled>
//   {this.state.albums.map((a, index) => <List.Item key={index}><Image src={a.images[3]} size='mini'/>{a.name}</List.Item>)}
// </List>

export default ArtistAlbumsModal
