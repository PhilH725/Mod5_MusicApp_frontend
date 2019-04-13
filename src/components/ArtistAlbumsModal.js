
import React, {Component} from 'react'
import {Modal, List, Image} from 'semantic-ui-react'
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
    albumData = albumData.filter(a => a.listeners > 100000 && a.name !== "(null)")
    let albums = []
    let duplicateChecker = []
    // this way of checking dupes doesnt work because same images are still different urls
    for (const i of albumData) {
      if (!duplicateChecker.includes(i.images[3])) {
        albums = [...albums, i]
        duplicateChecker = [...duplicateChecker, i.images[3]]
      }
    }
    return albums
  }

  render() {
    // console.log(this.state.albums)
    return (
      <Modal.Content>
        <Modal.Description>
          <Modal.Header>{this.props.artist.name}</Modal.Header>
            <List celled>
              {this.state.albums.map((a, index) => <List.Item key={index}><Image src={a.images[3]} size='mini'/>{a.name}</List.Item>)}
            </List>
        </Modal.Description>
      </Modal.Content>
    )
  }
}

//refactor list of albums into own component when i style them

export default ArtistAlbumsModal
