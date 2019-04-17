
import React from 'react'
import {addingFavoriteSong} from '../redux/actionCreators'
import {Table, Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'

const ArtistInfoModalTrackList = (props) => {

  const favoriteButton = () => {
    return (
      !props.mySongs.map(s => s.name).includes(props.track.name) ?
      <Button inverted color="linkedin" icon onClick={()=>props.addingFavoriteSong(props.track.name, props.track.artistName, props.user.id)}>
        <Icon name="star outline"/>
      </Button>
      :
      <Button inverted color="linkedin" disabled icon>
        <Icon name="star" />
      </Button>
    )
  }

  return (
    <Table.Row>
      <Table.HeaderCell id="artist-top-tracks-song-row">{props.track.name}</Table.HeaderCell>
      <Table.HeaderCell textAlign="right" id="artist-top-tracts-listeners-row" >{props.track.listeners}</Table.HeaderCell>
      <Table.HeaderCell id="table-button">{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  mySongs: state.mySongs
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteSong: (songName, artistName, id) => dispatch(addingFavoriteSong(songName, artistName, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistInfoModalTrackList)
