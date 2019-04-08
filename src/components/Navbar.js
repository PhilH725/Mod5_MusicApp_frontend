
import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Dropdown} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {logoutUser} from '../redux/actionCreators'
import {connect} from 'react-redux'

// <div className="ui menu small">
//   <Link to={"/my_songs"} className="item">My Songs</Link>
//   <Link to={"/my_playlists"} className="item">My Playlists</Link>
//   <Link to={"/my_artists"} className="item">My Artists</Link>
//   <Link to={"/my_albums"} className="item">My Albums</Link>
//   <Link to={"/my_genres"} className="item">My Genres</Link>
//   <Link to={"/find_music"} className="item">Find Music</Link>
//   <Link to={"/login"} className="item" onClick={props.logoutUser}>Logout</Link>
// </div>

const Navbar = (props) => {

  return (
    !isEmpty(props.user) ?
    <Menu className="ui small menu">
      <Dropdown item text=" My Music ">
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to={"/my_songs"} >My Songs</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/my_playlists"} >My Playlists</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/my_artists"} >My Artists</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/my_albums"} >My Albums</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/my_genres"} >My Genres</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Link to={"/find_music"} >Find Music</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to={"/login"} onClick={props.logoutUser}>Logout</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    :
    <Menu className="ui small menu">
      <Menu.Item>
        <Link to={"/find_music"} className="item">Find Music</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link to={"/login"} className="item">Login</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
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
