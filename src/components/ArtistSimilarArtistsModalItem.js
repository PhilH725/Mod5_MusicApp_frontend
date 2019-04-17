
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {addingFavoriteArtist} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistSimilarArtistsModalItem = (props) => {

  const favoriteButton = () => {
    return (
      !props.myArtists.map(a => a.name).includes(props.artist.name) ?
      <Button inverted color="linkedin" icon onClick={()=>props.addingFavoriteArtist(props.artist, props.user.id)}>
        <Icon name="star outline"/>
      </Button>
      :
      <Button inverted color="linkedin" disabled icon>
        <Icon name="star" />
      </Button>
    )
  }

  return (
    <Table.Row >
      <Table.HeaderCell id="my-artists-similar-artists-name">{props.artist.name}</Table.HeaderCell>
      <Table.HeaderCell id="table-button">{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  myArtists: state.myArtists
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteArtist: (artist, id) => dispatch(addingFavoriteArtist(artist, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSimilarArtistsModalItem)
