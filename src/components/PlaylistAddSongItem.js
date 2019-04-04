
import React from 'react'
import {addNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const PlaylistAddSongItem = (props) => {

  return (
    <div onClick={()=>props.addNewPlaylistSong(props.song)}>
      {props.song.name} - {props.song.artist} - {props.song.album}
      ----
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return {
    addNewPlaylistSong: (song) => dispatch(addNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAddSongItem)
