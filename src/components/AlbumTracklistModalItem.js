
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {addingFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const AlbumTracklistModalItem = (props) => {

  function convertDurationToTime() {
    let minutes = Math.floor(props.track.duration / 60)
    let seconds = props.track.duration % 60
    if (seconds < 10) {
      seconds = "0" + seconds
    }
    return `${minutes}:${seconds}`
  }

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
      <Table.HeaderCell textAlign="center">{props.trackNumber}</Table.HeaderCell>
      <Table.HeaderCell textAlign="center">{convertDurationToTime()}</Table.HeaderCell>
      <Table.HeaderCell>{props.track.name.slice(0,60)}</Table.HeaderCell>
      <Table.HeaderCell textAlign="center">{favoriteButton()}</Table.HeaderCell>
    </Table.Row>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  mySongs: state.mySongs
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteSong: (songName, artistName, userId) => dispatch(addingFavoriteSong(songName, artistName, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracklistModalItem)
