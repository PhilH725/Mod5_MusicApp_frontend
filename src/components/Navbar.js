
import React from 'react'
import {Link} from 'react-router-dom'
import {isEmpty} from 'lodash'
import {logoutUser} from '../redux/actionCreators'
import {connect} from 'react-redux'

const Navbar = (props) => {

  return (
    !isEmpty(props.user) ?
    <div className="ui menu small">
      <Link to={"/my_songs"} className="item">My Songs</Link>
      <Link to={"/my_playlists"} className="item">My Playlists</Link>
      <Link to={"/my_artists"} className="item">My Artists</Link>
      <Link to={"/my_albums"} className="item">My Albums</Link>
      <Link to={"/my_genres"} className="item">My Genres</Link>
      <Link to={"/find_music"} className="item">Find Music</Link>
      <Link to={"/login"} className="item" onClick={props.logoutUser}>Logout</Link>

    </div>
    :
    <div className="ui menu small">
      <Link to={"/login"} className="item">Login</Link>
      <Link to={"/find_music"} className="item">Find Music</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
