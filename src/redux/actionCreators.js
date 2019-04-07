
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
        dispatch(authenticatedUser(data.user))
        localStorage.setItem('token', data.token)
      } else {
        alert('Incorrect username or password')
      }
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

function fetchedFavorites(favorites) {
  return { type: "FETCHED_FAVORITES", payload: favorites }
}

function fetchingFavorites() {
  return (dispatch) => {
    fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(favorites => {
      dispatch(fetchedFavorites(favorites))
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

function fetchingPlaylists() {
  return (dispatch) => {
    fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(playlists => {
      dispatch(fetchedPlaylists(playlists))
    })
  }
}

function createdNewPlaylist(playlist) {
  return { type: "CREATE_NEW_PLAYLIST", payload: playlist }
}

function renderNewPlaylist(name, songs) {
  console.log('hi')
  return { type: "OPTIMISTICALLY_RENDER_NEW_PLAYLIST", payload: {name: name, songs: songs} }
}

function creatingNewPlaylist(name, songs, id) {
  return (dispatch) => {
    fetch('http://localhost:3000/playlists', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        name: name,
        user_id: id
      })
    })
    .then(res => res.json())
    .then(playlist => {
      dispatch(createdNewPlaylist(playlist))
      dispatch(addingSongsToPlaylist(playlist, songs))
    })
  }
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

function addFavoriteSong(song) {
  fetch('http://localhost:3000/user_songs', {
    method: 'POST',
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: 1,
      song_id: song.id
    })
  })
  return { type: "ADD_FAVORITE_SONG", payload: song }
}

function addFavoriteArtist(artist) {
  fetch('http://localhost:3000/user_artists', {
    method: 'POST',
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: 1,
      artist_id: artist.id
    })
  })
  return { type: "ADD_FAVORITE_ARTIST", payload: artist }
}

function addFavoriteAlbum(album) {
  fetch('http://localhost:3000/user_albums', {
    method: 'POST',
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: 1,
      album_id: album.id
    })
  })
  return { type: "ADD_FAVORITE_ALBUM", payload: album }
}

function addFavoriteGenre(genre) {
  fetch('http://localhost:3000/user_genres', {
    method: 'POST',
    headers: {"Content-Type":"application/json", Accept:"application/json"},
    body: JSON.stringify({
      user_id: 1,
      genre_id: genre.id
    })
  })
  return { type: "ADD_FAVORITE_GENRE", payload: genre }
}

function deletePlaylist(playlist) {
  fetch(`http://localhost:3000/playlists/${playlist.id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(pl => console.log(pl))
  return { type: "DELETE_PLAYLIST", payload: playlist }
}

export { authenticatingUser, fetchingSongs, fetchingArtists, fetchingAlbums, fetchingGenres, fetchingFavorites, fetchingItem, fetchingPlaylists, changeSearchText, changeSearchType, resetActiveItem, changeSelectedPlaylist, updateNewPlaylistText, renderNewPlaylist, creatingNewPlaylist, deletePlaylist, fetchingPlaylistToEdit, addNewPlaylistSong, removeNewPlaylistSong, addFavoriteSong, addFavoriteArtist, addFavoriteAlbum, addFavoriteGenre }
