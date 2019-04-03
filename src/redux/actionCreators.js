
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

function loadingSongs() {
  return { type: "LOADING_SONGS"}
}

function changeSearchText(text) {
  return { type: "CHANGE_SEARCH_TEXT", payload: text }
}

export { fetchedSongs, fetchingSongs, fetchingFavorites, fetchedFavorites, changeSearchText }
