
import React, {Component} from 'react'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'
import PublishedPlaylistsContainer from './PublishedPlaylistsContainer'
import MyTempMusicContainer from './MyTempMusicContainer'
import EditPlaylist from './EditPlaylist'
import NewPlaylistContainer from './NewPlaylistContainer'
import MySongsContainer from './MySongsContainer'
import MyArtistsContainer from './MyArtistsContainer'
import MyAlbumsContainer from './MyAlbumsContainer'
import LoginContainer from './LoginContainer'
import SignupForm from '../components/SignupForm'
import { Route, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'

class MainContainer extends Component {

  render() {
    return (
      <div className="main-container">
        <Switch>

          <Route path="/playlists/edit/:id" render={ (props) => {
            return <EditPlaylist id={props.match.params.id} />
          }} />

          <Route path="/playlists/new" component={NewPlaylistContainer} />
          <Route exact path="/login" render = { (props) => {
            return isEmpty(this.props.user) ? <LoginContainer/> : <Redirect to="/my_songs"/>
          }} />
          <Route exact path="/my_temp_music" render={ () => {
            return isEmpty(this.props.user) ? <MyTempMusicContainer/> : <Redirect to="/my_songs"/>
          }} />
          <Route exact path="/create_account" component={SignupForm} />
          <Route exact path="/published_playlists" component={PublishedPlaylistsContainer} />
          <Route exact path="/my_songs" component={MySongsContainer} />
          <Route exact path="/my_playlists" component={PlaylistContainer} />
          <Route exact path="/my_artists" component={MyArtistsContainer} />
          <Route exact path="/my_albums" component={MyAlbumsContainer} />
          <Route exact path="/find_music" component={FindMusicContainer} />
          <Route exact path="/" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(MainContainer)
