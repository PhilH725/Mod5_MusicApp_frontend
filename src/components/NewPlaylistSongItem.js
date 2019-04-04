
import React from 'react'
// import {addNewPlaylistSong} from '../redux/actionCreators'
// import {connect} from 'react-redux'

const NewPlaylistSongItem = (props) => {

  return (
    <div onClick={()=>props.handleClick(props.song)}>
      {props.song.name} - {props.song.artist} - {props.song.album}
    </div>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addNewPlaylistSong: (song) => dispatch(addNewPlaylistSong(song))
//   }
// }

export default NewPlaylistSongItem
