
import React from 'react'
import {addFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const SongItemFind = (props) => {

  return (
    <div onClick={()=>props.addFavoriteSong(props.song)}>
        {props.song.name}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteSong: (song) => dispatch(addFavoriteSong(song))
  }
}

export default connect(null, mapDispatchToProps)(SongItemFind)
