
import { combineReducers } from 'redux'

// const initialState = {
//   songs: [],
//   searchVal: "hands"
// }

// const favoritesReducer = (oldState=initialState, action) => {
//   switch (action.type){
//     case "SOMETHING":
//       return oldState
//     default:
//       return oldState
//   }
// }

const searchValReducer = (oldState="hands", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchVal: searchValReducer
  //state : reducer
})

export default rootReducer
