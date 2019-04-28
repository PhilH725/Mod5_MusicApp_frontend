
import {createLastFMClient} from '../LastFM'

// ########
// misc
// ########

// boolean used to display a loading screen while fetch calls take place
function loadingData() {
  return { type: "LOADING_DATA"}
}

// my songs menu option used to sort by name/album/artist
function updateSortType(choice) {
  return { type: "UPDATE_SORT_TYPE", payload: choice }
}

// my songs menu option used to filter by name
function updateSortSearchText(text) {
  return { type: "UPDATE_SORT_SEARCH_TEXT", payload: text }
}

// ###########

// ########
// login/auth
// ########

function authenticatingUser(username, password) {
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
    	method: "POST",
    	headers:{"Content-Type":"application/json", "Accept": "application/json"},
    	body:JSON.stringify({
    		username: username,
    		password: password
    	})
    })
    .then(res => res.json())
    .then(data => {
      if (data.authenticated) {
        dispatch(fetchingFavorites(data.user.id))
        dispatch(fetchingPlaylists(data.user.id))
        dispatch(authenticatedUser(data.user))
        localStorage.setItem('token', data.token)
      } else {
        alert('Incorrect username or password')
      }
    })
  }
}

function authenticatedUser(user) {
  return { type: "AUTHENTICATED_USER", payload: user }
}

function authenticatingToken(token) {
  return (dispatch) => {
  fetch('http://localhost:3000/verify_token', {
    headers:{"Authentication": `Bearer ${token}`}
  })
  .then(res => res.json())
  .then(user =>{
    dispatch(fetchingFavorites(user.id))
    dispatch(fetchingPlaylists(user.id))
    dispatch(authenticatedToken(user))
    })
  }
}

function authenticatedToken(user) {
  return { type: "AUTHENTICATED_TOKEN", payload: user }
}

function logoutUser() {
  localStorage.removeItem('token')
  return { type: "LOGOUT_USER" }
}

//############

// ########
// retrieve user/site data
// ########

function fetchingFavorites(userId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then(favorites => {
      dispatch(fetchedFavorites(favorites))
    })
  }
}

function fetchedFavorites(favorites) {
  return { type: "FETCHED_FAVORITES", payload: favorites }
}

function fetchingPlaylists(userId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedPlaylists(data.playlists))
    })
  }
}

function fetchedPlaylists(playlists) {
  return { type: "FETCHED_PLAYLISTS", payload: playlists }
}

function fetchingPublishedPlaylists() {
  return (dispatch) => {
    fetch(`http://localhost:3000/published_playlists`)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedPublishedPlaylists(data))
    })
  }
}

function fetchedPublishedPlaylists(playlists) {
  return { type: "FETCHED_PUBLISHED_PLAYLISTS", payload: playlists }
}

//############

// ########
// add/remove favorites
// ########

// ###
// songs
// ###

// basic song data is retrieved from the LastFM API through song name/artist name
function addingFavoriteSong(songName, artistName, userId) {
  return (dispatch) => {
    createLastFMClient().trackInfo({ name: songName, artistName: artistName }, (err, data) => {
      dispatch(addArtistDataToFavoriteSong(data, artistName, userId))
    })
  }
}

// artist data is added to the song data in case song's artist hasn't been created locally
function addArtistDataToFavoriteSong(songData, artistName, userId) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: artistName }, (err, artistData) => {
      dispatch(addFavoriteSong(songData, artistData, userId))
    })
  }
}

// song data and artist data (required album data is also present) are all sent to the backend to create a new song
// once a song is created (or if it already existed,) the song is added to the users favorites
function addFavoriteSong(songData, artistData, id) {
  return (dispatch) => {
    fetch('http://localhost:3000/user_songs', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        user_id: id,
        songData: songData,
        artistData: artistData
      })
    })
    .then(res => res.json())
    .then(song => {
      dispatch(addedFavoriteSong(song))
    })
  }
}

function addedFavoriteSong(song) {
  return { type: "ADD_FAVORITE_SONG", payload: song }
}

// song unfavorites are optimistically rendered, with the backend updating behind the scenes
function unfavoriteSong(song, id) {
  fetch('http://localhost:3000/user_songs', {
    method: "DELETE",
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: id,
      song_id: song.id
    })
  })
  return { type: "REMOVE_FAVORITE_SONG", payload: song }
}

// #####

// ###
// artists
// ###

// full artist data is gathered before the post request is dispatched
function addingFavoriteArtist(artist, userId) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: artist.name }, (err, artistData) => {
      dispatch(addFavoriteArtist(artistData, userId))
    })
  }
}

function addFavoriteArtist(artistData, id) {
  return (dispatch) => {
    fetch('http://localhost:3000/user_artists', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        user_id: id,
        artistData: artistData
      })
    })
    .then(res => res.json())
    .then(artist => {
      dispatch(addedFavoriteArtist(artist))
    })
  }
}

function addedFavoriteArtist(artistData) {
  return { type: "ADD_FAVORITE_ARTIST", payload: artistData }
}

// artist unfavorites are rendered optimistically, and removed on the backend behind the scenes
function unfavoriteArtist(artist, id) {
  fetch('http://localhost:3000/user_artists', {
    method: "DELETE",
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: id,
      artist_id: artist.id
    })
  })
  return { type: "REMOVE_FAVORITE_ARTIST", payload: artist }
}

// #####

// ###
// albums
// ###

// basic album info is gathered using album and artist name
function addingFavoriteAlbum(album, id) {
  return (dispatch) => {
    createLastFMClient().albumInfo({ name: album.name, artistName: album.artistName }, (err, albumData) => {
      dispatch(addArtistInfoToNewAlbum(albumData, id))
    })
  }
}

// artist info is added in case artist hasn't been created in the backend
function addArtistInfoToNewAlbum(albumData, id) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: albumData.artistName }, (err, artistData) => {
      dispatch(addFavoriteAlbum(albumData, artistData, id))
    })
  }
}

function addFavoriteAlbum(albumData, artistData, id) {
  return (dispatch) => {
    fetch('http://localhost:3000/user_albums', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        user_id: id,
        albumData: albumData,
        artistData: artistData
      })
    })
    .then(res => res.json())
    .then(album => {
      dispatch(addedFavoriteAlbum(album))
    })
  }
}

function addedFavoriteAlbum(albumData) {
  return { type: "ADD_FAVORITE_ALBUM", payload: albumData }
}

// album unfavorites are rendered optimistically, and deleted in the backend behind the scenes
function unfavoriteAlbum(album, id) {
  fetch('http://localhost:3000/user_albums', {
    method: "DELETE",
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: id,
      album_id: album.id
    })
  })
  return { type: "REMOVE_FAVORITE_ALBUM", payload: album }
}

// ####

//############

// ########
// search actions
// ########

// controls search input in find music
function changeSearchText(text) {
  return { type: "CHANGE_SEARCH_TEXT", payload: text }
}

// controls whether user searches for songs/artists/albums in find music
function changeSearchType(type) {
  return { type: "CHANGE_SEARCH_TYPE", payload: type }
}

// queries the LastFM database based on the entered search term and search type
function queryLastFM(searchVal, searchType) {
  if (searchVal === "") {
    searchVal = " "
  }
  switch (searchType) {
    case "songs":
      return (dispatch) => {
        createLastFMClient().trackSearch({ q: searchVal }, (err, data) => {
          dispatch(fetchedSongQueryData(data.result))
        })
      }
    case "artists":
      return (dispatch) => {
        createLastFMClient().artistSearch({ q: searchVal }, (err, data) => {
          dispatch(fetchedArtistQueryData(data.result))
        })
      }
    case "albums":
      return (dispatch) => {
        createLastFMClient().albumSearch({ q: searchVal }, (err, data) => {
          dispatch(fetchedAlbumQueryData(data.result))
        })
      }
    default:
      console.log('error becase searchType was passed in with an invalid value')
      return null
  }
}

function fetchedSongQueryData(data) {
  return { type: "FETCHED_SONG_QUERY_DATA", payload: data }
}

function fetchedArtistQueryData(data) {
  return { type: "FETCHED_ARTIST_QUERY_DATA", payload: data }
}

function fetchedAlbumQueryData(data) {
  return { type: "FETCHED_ALBUM_QUERY_DATA", payload: data }
}

//############

// ########
// playlist actions
// ########

// ###
// general
// ###

function changeSelectedPlaylist(playlist) {
  return { type: "CHANGE_SELECTED_PLAYLIST", payload: playlist }
}

// #####

// ###
// new playlist
// ###

function updateNewPlaylistText(text) {
  return { type: "UPDATE_NEW_PLAYLIST_TEXT", payload: text }
}

function addNewPlaylistSong(song) {
  return { type: "ADD_NEW_PLAYLIST_SONG", payload: song }
}

function removeNewPlaylistSong(song) {
  return { type: "REMOVE_NEW_PLAYLIST_SONG", payload: song }
}

// a new playlist instance is created with the name and user id (songs are only passed along at this stage)
function creatingNewPlaylist(name, songs, userId) {
  return (dispatch) => {
    fetch('http://localhost:3000/playlists', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        name: name,
        user_id: userId
      })
    })
    .then(res => res.json())
    .then(playlist => {
      dispatch(addingSongsToPlaylist(playlist, songs))
    })
  }
}

// songs are added to the new playlist
function addingSongsToPlaylist(playlist, songs) {
  return (dispatch) => {
    fetch('http://localhost:3000/playlist_songs', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        playlist_id: playlist.id,
        songs: songs
      })
    })
    .then(res => res.json())
    .then(songs => {
      dispatch(addedNewSongsToPlaylist(playlist, songs))
    })
  }
}

function addedNewSongsToPlaylist(playlist, songs) {
  return { type: "ADDED_SONGS_TO_PLAYLIST", payload: {...playlist, songs} }
}

// #####

// ###
// edit playlist
// ###

// fetches the chosen playlist from the backend
function fetchingPlaylistToEdit(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/playlists/${id}`)
    .then(res => res.json())
    .then(playlist => {
      dispatch(fetchedPlaylistToEdit(playlist))
    })
  }
}

// sets a dummy playlist in state that can be edited without changes being permanent
function fetchedPlaylistToEdit(playlist) {
  return { type: "FETCHED_PLAYLIST_TO_EDIT", payload: {...playlist} }
}

function removeEditPlaylistSong(song) {
  return { type: "REMOVE_EDIT_PLAYLIST_SONG", payload: song }
}

// songs added to the playlist need slightly reformatted in order to optimistically render
function addEditPlaylistSong(song) {
  let songReformat = {
    id: song.id,
    name: song.name,
    artist: song.artist,
    album: song.album.name,
    albumImage: song.album.image
  }
  return { type: "ADD_EDIT_PLAYLIST_SONG", payload: songReformat}
}

function changePlaylistName(playlist, name) {
  return { type: "UPDATED_PLAYLIST_NAME", payload: {...playlist, name: name} }
}

// changes arent persisted to the backend until the save button is clicked
function savePlaylistChanges(playlist) {
  fetch(`http://localhost:3000/playlists/${playlist.id}`, {
    method: "PATCH",
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      playlist: playlist
    })
  })
  return { type: "SAVE_PLAYLIST_CHANGES", payload: playlist }
}

// #####

// ###
// delete playlist
// ###

function deletePlaylist(playlist) {
  fetch(`http://localhost:3000/playlists/${playlist.id}`, {
    method: "DELETE"
  })
  return { type: "DELETE_PLAYLIST", payload: playlist }
}

// #####

// ###
// share playlist
// ###

// clicking the share button toggles the published status
function sharingPlaylist(playlist) {
  return (dispatch) => {
    fetch(`http://localhost:3000/playlists/${playlist.id}`, {
      method: "PATCH",
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        published: !playlist.published
      })
    })
    .then(res => res.json())
    .then(playlist => {
      dispatch(sharedPlaylist(playlist))
    })
  }
}

function sharedPlaylist(playlist) {
  return { type: "SHARED_PLAYLIST", payload: playlist }
}

// #####

// ###
// like playlist
// ###

// result of clicking the like button on a published playlist
function likePlaylist(playlist) {
  fetch(`http://localhost:3000/playlists/${playlist.id}`, {
    method: "PATCH",
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      likes: playlist.likes + 1
    })
  })
  return { type: "LIKED_PLAYLIST", payload: {...playlist, likes: playlist.likes + 1} }
}

// #####

//############

export { loadingData, updateSortType, updateSortSearchText, authenticatingUser, authenticatingToken, logoutUser, fetchingFavorites, fetchingPlaylists, fetchingPublishedPlaylists, addingFavoriteSong, unfavoriteSong, addingFavoriteArtist, unfavoriteArtist, addingFavoriteAlbum, unfavoriteAlbum, changeSearchText, changeSearchType, queryLastFM, changeSelectedPlaylist, updateNewPlaylistText, addNewPlaylistSong, removeNewPlaylistSong, creatingNewPlaylist, fetchingPlaylistToEdit, removeEditPlaylistSong, addEditPlaylistSong, changePlaylistName, savePlaylistChanges, deletePlaylist, sharingPlaylist, likePlaylist }
