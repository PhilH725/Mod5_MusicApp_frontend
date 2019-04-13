
import React, {Component, Fragment} from 'react'
import ArtistItem from '../components/ArtistItem'
import {Item, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyArtistsContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header id="my-music-header" as="h2" float="middle" dividing>My Artists</Header>
        <Item.Group id="my-artists-list" divided>
          {this.props.artists.sort((a,b) => a.name.localeCompare(b.name)).map(a => <ArtistItem key={a.id} artist={a} />)}
        </Item.Group>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    artists: state.myArtists
  })
}

export default connect(mapStateToProps)(MyArtistsContainer)
