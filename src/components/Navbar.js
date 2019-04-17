
import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Dropdown} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {logoutUser} from '../redux/actionCreators'
import {connect} from 'react-redux'

const Navbar = (props) => {

  return (
    !isEmpty(props.user) ?
    <Menu className="ui small menu">
      <Dropdown item text=" My Music ">
        <Dropdown.Menu>
          <Link to={"/my_songs"} >
            <Dropdown.Item>
              My Songs
            </Dropdown.Item>
          </Link>
          <Link to={"/my_playlists"} >
            <Dropdown.Item>
              My Playlists
            </Dropdown.Item>
          </Link>
          <Link to={"/my_artists"} >
            <Dropdown.Item>
              My Artists
            </Dropdown.Item>
          </Link>
          <Link to={"/my_albums"} >
            <Dropdown.Item>
              My Albums
            </Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
      <Link to={"/published_playlists"} >
        <Menu.Item>
          Playlists
        </Menu.Item>
      </Link>
      <Link to={"/find_music"} >
        <Menu.Item>
          Find Music
        </Menu.Item>
      </Link>
      <Menu.Menu position="right">
        <Link to={"/login"} onClick={props.logoutUser}>
          <Menu.Item>
            Logout
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
    :
    <Menu className="ui small menu">
      <Link to ={"my_temp_music"}>
        <Menu.Item>
          My Music
        </Menu.Item>
      </Link>
      <Link to={"published_playlists"}>
        <Menu.Item>
          View Playlists
        </Menu.Item>
      </Link>
      <Link to={"/find_music"}>
        <Menu.Item>
          Find Music
        </Menu.Item>
      </Link>
      <Menu.Menu position="right">
        <Link to={"/login"} >
          <Menu.Item>
            Login
          </Menu.Item>
        </Link>
        <Link to={"/create_account"}>
          <Menu.Item>
            Create Account
          </Menu.Item>
        </Link>
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
