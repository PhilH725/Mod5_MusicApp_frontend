
import React from 'react'
import ArtistTopTracksModal from './ArtistTopTracksModal'
import ArtistSimilarArtistsModal from './ArtistSimilarArtistsModal'
import ArtistAlbumsModal from './ArtistAlbumsModal'
import {Item, Button, Modal} from 'semantic-ui-react'
import {unfavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistItem = (props) => {

  return (
    <Item id="my-artists-item">
      <Item.Image id="artists-pic" src={props.artist.image} alt={'artist-pic'} />
      <Item.Content id="my-artists-content">
        <Item.Header as="h2">{props.artist.name}</Item.Header>
        <Item.Description >
          {props.artist.bio}
        </Item.Description>
      </Item.Content>
      <Item.Content id="my-artists-button-container">
        <Modal trigger={<Button id="my-artists-button" inverted color="facebook" floated="right" size="mini" compact>Top Tracks</Button>} centered={false}>
          <ArtistTopTracksModal artist={props.artist} />
        </Modal>
        <Modal trigger={<Button id="my-artists-button" inverted color="twitter" floated="right" size="mini" compact>Similar Artists</Button>} centered={false}>
          <ArtistSimilarArtistsModal artist={props.artist} />
        </Modal>
        <Modal trigger={<Button id="my-artists-button" inverted color="vk" floated="right" size="mini" compact>View Albums</Button>} centered={false}>
          <ArtistAlbumsModal artist={props.artist} />
        </Modal>
        <Button id="my-artists-button" inverted color="linkedin" floated="right" size="mini" compact onClick={()=>props.unfavoriteArtist(props.artist, props.user.id)}>Unfavorite</Button>
      </Item.Content>
    </Item>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    unfavoriteArtist: (artist, id) => dispatch(unfavoriteArtist(artist, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistItem)
