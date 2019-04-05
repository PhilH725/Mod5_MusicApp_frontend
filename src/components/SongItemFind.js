
import React from 'react'
import {addFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const SongItemFind = (props) => {

  return (
    <div>
      {props.song.name} <button onClick={()=>props.addFavoriteSong(props.song)}>Add to Favorites</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteSong: (song) => dispatch(addFavoriteSong(song))
  }
}

export default connect(null, mapDispatchToProps)(SongItemFind)
