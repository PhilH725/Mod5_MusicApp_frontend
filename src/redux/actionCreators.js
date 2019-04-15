
import {createLastFMClient} from '../LastFM'

function authenticatedUser(user) {
  return { type: "AUTHENTICATED_USER", payload: user }
}

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

function authenticatedToken(user) {
  return { type: "AUTHENTICATED_TOKEN", payload: user }
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

function logoutUser() {
  localStorage.removeItem('token')
  return { type: "LOGOUT_USER" }
}

function fetchedFavorites(favorites) {
  return { type: "FETCHED_FAVORITES", payload: favorites }
}

function fetchingFavorites(userId) {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(res => res.json())
    .then(favorites => {
      dispatch(fetchedFavorites(favorites))
    })
  }
}

function fetchedSongs(songs) {
  return { type: "FETCHED_SONGS", payload: songs}
}

function fetchingSongs() {
  return (dispatch) => {
    dispatch(loadingSongs())
    fetch('http://localhost:3000/songs')
    .then(res => res.json())
    .then(songs => {
      dispatch(fetchedSongs(songs))
    })
  }
}

function fetchedArtists(artists) {
  return { type: "FETCHED_ARTISTS", payload: artists}
}

function fetchingArtists() {
  return (dispatch) => {
    fetch('http://localhost:3000/artists')
    .then(res => res.json())
    .then(artists => {
      dispatch(fetchedArtists(artists))
    })
  }
}

function fetchedAlbums(albums) {
  return { type: "FETCHED_ALBUMS", payload: albums}
}

function fetchingAlbums() {
  return (dispatch) => {
    fetch('http://localhost:3000/albums')
    .then(res => res.json())
    .then(albums => {
      dispatch(fetchedAlbums(albums))
    })
  }
}

function fetchedGenres(genres) {
  return { type: "FETCHED_GENRES", payload: genres}
}

function fetchingGenres() {
  return (dispatch) => {
    fetch('http://localhost:3000/genres')
    .then(res => res.json())
    .then(genres => {
      dispatch(fetchedGenres(genres))
    })
  }
}

function fetchedItem(item) {
  return { type: "FETCHED_ITEM", payload: item }
}

function fetchingItem(itemType, id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/${itemType}/${id}`)
    .then(res => res.json())
    .then(item => {
      dispatch(fetchedItem(item))
    })
  }
}

function fetchedPlaylists(playlists) {
  return { type: "FETCHED_PLAYLISTS", payload: playlists }
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

function addedNewSongsToPlaylist(playlist, songs) {
  return { type: "ADDED_SONGS_TO_PLAYLIST", payload: {...playlist, songs} }
}

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

function fetchedPlaylistToEdit(playlist) {
  return { type: "FETCHED_PLAYLIST_TO_EDIT", payload: playlist }
}

function fetchingPlaylistToEdit(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/playlists/${id}`)
    .then(res => res.json())
    .then(playlist => {
      dispatch(fetchedPlaylistToEdit(playlist))
    })
  }
}

function loadingSongs() {
  return { type: "LOADING_SONGS"}
}

function changeSearchText(text) {
  return { type: "CHANGE_SEARCH_TEXT", payload: text }
}

function changeSearchType(type) {
  return { type: "CHANGE_SEARCH_TYPE", payload: type }
}

function resetActiveItem() {
  return { type: "RESET_ACTIVE_ITEM" }
}

function updateNewPlaylistText(text) {
  return { type: "UPDATE_NEW_PLAYLIST_TEXT", payload: text }
}

function changeSelectedPlaylist(playlist) {
  return { type: "CHANGE_SELECTED_PLAYLIST", payload: playlist }
}

function addNewPlaylistSong(song) {
  return { type: "ADD_NEW_PLAYLIST_SONG", payload: song }
}

function removeNewPlaylistSong(song) {
  return { type: "REMOVE_NEW_PLAYLIST_SONG", payload: song }
}

function addedFavoriteSong(song) {
  return { type: "ADD_FAVORITE_SONG", payload: song }
}

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

function addArtistDataToFavoriteSong(songData, artistName, userId) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: artistName }, (err, artistData) => {
      dispatch(addFavoriteSong(songData, artistData, userId))
    })
  }
}

function addingFavoriteSong(songName, artistName, userId) {
  return (dispatch) => {
    createLastFMClient().trackInfo({ name: songName, artistName: artistName }, (err, data) => {
      dispatch(addArtistDataToFavoriteSong(data, artistName, userId))
    })
  }
}

function addedFavoriteArtist(artistData) {
  return { type: "ADD_FAVORITE_ARTIST", payload: artistData }
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

function addingFavoriteArtist(artist, userId) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: artist.name }, (err, artistData) => {
      dispatch(addFavoriteArtist(artistData, userId))
    })
  }
}

function addedFavoriteAlbum(albumData) {
  return { type: "ADD_FAVORITE_ALBUM", payload: albumData }
}

function addingFavoriteAlbum(albumData, artistData, id) {
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

function addArtistInfoToNewAlbum(albumData, id) {
  return (dispatch) => {
    createLastFMClient().artistInfo({ name: albumData.artistName }, (err, artistData) => {
      dispatch(addingFavoriteAlbum(albumData, artistData, id))
    })
  }
}

function addFavoriteAlbum(album, id) {
  return (dispatch) => {
    createLastFMClient().albumInfo({ name: album.name, artistName: album.artistName }, (err, albumData) => {
      dispatch(addArtistInfoToNewAlbum(albumData, id))
    })
  }
}

function addFavoriteGenre(genre, id) {
  fetch('http://localhost:3000/user_genres', {
    method: 'POST',
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: id,
      genre_id: genre.id
    })
  })
  return { type: "ADD_FAVORITE_GENRE", payload: genre }
}

function deletePlaylist(playlist) {
  fetch(`http://localhost:3000/playlists/${playlist.id}`, {
    method: "DELETE"
  })
  return { type: "DELETE_PLAYLIST", payload: playlist }
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

function fetchedGenreQueryData(data) {
  return { type: "FETCHED_GENRE_QUERY_DATA", payload: data }
}

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
    case "genres":
      return (dispatch) => {
        createLastFMClient().tagTopArtists({ tag: searchVal }, (err, data) => {
          dispatch(fetchedGenreQueryData(data.artist))
        })
      }
    default:
      console.log('error becase searchType was passed in with an invalid value')
      return null
  }
}

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

function updateSortType(choice) {
  return { type: "UPDATE_SORT_TYPE", payload: choice }
}

function resetSearchParameters() {
  return { type: "RESET_SEARCH_PARAMETERS" }
}

function orderPlaylist(songs) {
  console.log(songs)
  return { type: "ORDER_PLAYLIST", payload: songs }
}

export { authenticatingUser, authenticatingToken, logoutUser, fetchingSongs, fetchingArtists, fetchingAlbums, fetchingGenres, fetchingFavorites, fetchingItem, fetchingPlaylists, changeSearchText, changeSearchType, resetActiveItem, changeSelectedPlaylist, updateNewPlaylistText, creatingNewPlaylist, deletePlaylist, fetchingPlaylistToEdit, addNewPlaylistSong, removeNewPlaylistSong, addingFavoriteSong, addingFavoriteArtist, addFavoriteAlbum, addFavoriteGenre, queryLastFM, unfavoriteSong, unfavoriteArtist, unfavoriteAlbum, updateSortType, resetSearchParameters, orderPlaylist }
