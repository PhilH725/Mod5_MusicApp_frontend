
import React from 'react'
import {Item, Button, Icon} from 'semantic-ui-react'
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

  function toggleFavorite() {
    if (props.favoriteSongs.map(s => s.name).includes(props.track.name)) {
      //unfavorite song needs rewritten to work without needing the id passed in
      return (
        <Button icon onClick={() => {"unfavoriteSong()"}} >
          <Icon name="star" />
        </Button>
      )
    } else {
      return (
        <Button icon onClick={() => {props.addingFavoriteSong(props.track.name, props.track.artistName, props.user.id)}} >
          <Icon name="star outline" />
        </Button>
      )
    }
  }

  return (
    <Item>
      <Item.Image size='mini' src={props.image} alt={'album-art'} />
      <Item.Content verticalAlign="middle">
        <Item.Header id="track-info" >{props.trackNumber}. &ensp; {props.track.name.slice(0,60)}  -  {convertDurationToTime()}</Item.Header>
      </Item.Content>
      {toggleFavorite()}
    </Item>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  favoriteSongs: state.mySongs
})

const mapDispatchToProps = dispatch => {
  return {
    addingFavoriteSong: (songName, artistName, userId) => dispatch(addingFavoriteSong(songName, artistName, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumTracklistModalItem)
