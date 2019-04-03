
import { combineReducers } from 'redux'

const searchValReducer = (oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const loadingReducer = (oldState=false, action) => {
  switch (action.type) {
    case "LOADING_SONGS":
      return true
    case "FETCHED_SONGS":
      return false
    default:
      return oldState
  }
}

const songsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_SONGS":
      return action.payload
    default:
      return oldState
  }
}

const mySongsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_songs
    default:
      return oldState
  }
}

const myArtistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_artists
    default:
      return oldState
  }
}

const myAlbumsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_albums
    default:
      return oldState
  }
}

const myGenresReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_genres
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchVal: searchValReducer,
  songs: songsReducer,
  loading: loadingReducer,
  mySongs: mySongsReducer,
  myArtists: myArtistsReducer,
  myAlbums: myAlbumsReducer,
  myGenres: myGenresReducer
})

export default rootReducer
