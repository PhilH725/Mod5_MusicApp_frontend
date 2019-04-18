
import React, {Component} from 'react'
import AlbumTracklistModal from './AlbumTracklistModal'
import {Item, Button, Modal} from 'semantic-ui-react'
import {unfavoriteAlbum} from '../redux/actionCreators'
import {createLastFMClient} from '../LastFM'
import {connect} from 'react-redux'

class AlbumItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albumInfo: {}
    }
  }

  componentDidMount() {
    createLastFMClient().albumInfo({ name: this.props.album.name, artistName: this.props.album.artistName }, (err, data) => {
      this.setState({albumInfo: data})
    })
  }

  render() {
    return (
      <Item>
        <Item.Image className="my-music-image" src={this.props.album.image} alt={"album-art"} />
        <Item.Content id="my-albums-content">
          <Item.Header>{this.props.album.name} - {this.props.album.artistName}</Item.Header>
          <Item.Description>
            {this.state.albumInfo.summary}
          </Item.Description>
        </Item.Content>
        <Item.Content id="my-albums-button-container">
          <Modal trigger={<Button id="my-albums-button" inverted color="vk" >Tracklist</Button>} centered={false}>
            <AlbumTracklistModal album={this.state.albumInfo} />
          </Modal>
          <Button id="my-albums-button" inverted color="linkedin" onClick={() => this.props.unfavoriteAlbum(this.props.album, this.props.user.id)}> Unfavorite</Button>
        </Item.Content>
      </Item>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    unfavoriteAlbum: (album, id) => dispatch(unfavoriteAlbum(album, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumItem)
