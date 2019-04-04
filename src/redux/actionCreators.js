
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

function creatingNewPlaylist(name, id) {
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

export { fetchingSongs, fetchingFavorites, fetchingItem, fetchingPlaylists, changeSearchText, resetActiveItem, changeSelectedPlaylist, updateNewPlaylistText, creatingNewPlaylist, fetchingPlaylistToEdit, addNewPlaylistSong, removeNewPlaylistSong }
