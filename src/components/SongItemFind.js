
import React from 'react'
import {addFavoriteSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const SongItemFind = (props) => {

  return (
    <div>
      {props.song.name} <button onClick={()=>props.addFavoriteSong(props.song, props.user.id)}>Add to Favorites</button>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteSong: (song, id) => dispatch(addFavoriteSong(song, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongItemFind)
