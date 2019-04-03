
import React, {Component} from 'react'
import MyMusicContainer from './MyMusicContainer'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'
import SongShow from '../components/SongShow'
import ArtistShow from '../components/ArtistShow'
import AlbumShow from '../components/AlbumShow'
import GenreShow from '../components/GenreShow'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <Switch>

          <Route path="/items/songs/:id" render={ (props) => {
            let songId = props.match.params.id
            return <SongShow type={"songs"} id={songId}/>
          }} />

          <Route path="/items/artists/:id" render={ (props) => {
            let artistId = props.match.params.id
            return <ArtistShow type={"artists"} id={artistId}/>
          }} />

          <Route path="/items/albums/:id" render={ (props) => {
            let albumId = props.match.params.id
            return <AlbumShow type={"albums"} id={albumId}/>
          }} />

          <Route path="/items/genres/:id" render={ (props) => {
            let genreId = props.match.params.id
            return <GenreShow type={"genres"} id={genreId}/>
          }} />

          <Route exact path="/my_music" component={MyMusicContainer} />
          <Route exact path="/find_music" component={FindMusicContainer} />
          <Route exact path="/playlist" component={PlaylistContainer} />
          <Route exact path="/" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    songs: state.mySongs
  })
}

export default connect(mapStateToProps)(MainContainer)
