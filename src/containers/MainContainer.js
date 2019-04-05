
import React, {Component} from 'react'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'
import SongShow from '../components/SongShow'
import ArtistShow from '../components/ArtistShow'
import AlbumShow from '../components/AlbumShow'
import GenreShow from '../components/GenreShow'
import EditPlaylist from './EditPlaylist'
import NewPlaylistContainer from './NewPlaylistContainer'
import MySongsContainer from './MySongsContainer'
import MyArtistsContainer from './MyArtistsContainer'
import MyAlbumsContainer from './MyAlbumsContainer'
import MyGenresContainer from './MyGenresContainer'
import { Route, Switch } from 'react-router-dom'

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

          <Route path="/playlists/edit/:id" render={ (props) => {
            let playlistId = props.match.params.id
            playlistId=1
            return <EditPlaylist id={playlistId} />
          }} />

          <Route path="/playlists/new" component={NewPlaylistContainer} />

          <Route exact path="/my_songs" component={MySongsContainer} />
          <Route exact path="/my_playlists" component={PlaylistContainer} />
          <Route exact path="/my_artists" component={MyArtistsContainer} />
          <Route exact path="/my_albums" component={MyAlbumsContainer} />
          <Route exact path="/my_genres" component={MyGenresContainer} />
          <Route exact path="/find_music" component={FindMusicContainer} />
          <Route exact path="/" />
        </Switch>
      </div>
    )
  }
}

export default MainContainer
