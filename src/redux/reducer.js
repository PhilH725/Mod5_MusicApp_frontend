
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

const rootReducer = combineReducers({
  searchVal: searchValReducer,
  songs: songsReducer,
  loading: loadingReducer
})

export default rootReducer
