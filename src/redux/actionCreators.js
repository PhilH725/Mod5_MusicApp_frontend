
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
    fetch('http://localhost:3000/users/3')
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
    fetch('http://localhost:3000/users/3')
    .then(res => res.json())
    .then(playlists => {
      dispatch(fetchedPlaylists(playlists))
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

function changeSelectedPlaylist(playlist) {
  return { type: "CHANGE_SELECTED_PLAYLIST", payload: playlist }
}

export { fetchedSongs, fetchingSongs, fetchingFavorites, fetchedFavorites, fetchingItem, fetchingPlaylists, changeSearchText, resetActiveItem, changeSelectedPlaylist }
