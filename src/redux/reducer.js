
import { combineReducers } from 'redux'

const userReducer = (oldState={}, action) => {
  switch (action.type) {
    case "AUTHENTICATED_USER":
      return action.payload
    case "AUTHENTICATED_TOKEN":
      return action.payload
    case "LOGOUT_USER":
      return {}
    default:
      return oldState
  }
}

const mySongsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_songs
    case "ADD_FAVORITE_SONG":
      if (!oldState.map(s => s.id).includes(action.payload.id)) {
      return [...oldState, {id: action.payload.id,
                            name: action.payload.name,
                            artist: action.payload.artist.name,
                            album: {
                              name: action.payload.album.name,
                              image: action.payload.album.album_image
                            }
                          }]
          } else {
            return oldState
          }
    case "REMOVE_FAVORITE_SONG":
      return oldState.filter(s => s.id !== action.payload.id)
    default:
      return oldState
  }
}

const myArtistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_artists
    case "ADD_FAVORITE_ARTIST":
      if (!oldState.map(a => a.id).includes(action.payload.id)) {
      return [...oldState, {
                            id: action.payload.id,
                            name: action.payload.name,
                            image: action.payload.artist_image,
                            bio: action.payload.bio
                           }]
        } else {
          return oldState
        }
    case "REMOVE_FAVORITE_ARTIST":
      return oldState.filter(a => a.id !== action.payload.id)
    default:
      return oldState
  }
}

const myAlbumsReducer = (oldState=[], action) => {
  // debugger
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_albums
    case "ADD_FAVORITE_ALBUM":
    if (!oldState.map(a => a.id).includes(action.payload.id)) {
      return [...oldState, {
                            id: action.payload.albumData.id,
                            name: action.payload.albumData.name,
                            artistName: action.payload.artistName,
                            image: action.payload.albumData.album_image,
                            songs: action.payload.trackList
                          }]
        } else {
          return oldState
        }
    case "REMOVE_FAVORITE_ALBUM":
      return oldState.filter(a => a.id !== action.payload.id)
    default:
      return oldState
  }
}

const myGenresReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_genres
    case "ADD_FAVORITE_GENRE":
      return [...oldState, action.payload]
    default:
      return oldState
  }
}

const myPlaylistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_PLAYLISTS":
      return action.payload
    case "DELETE_PLAYLIST":
      return oldState.filter(p => p.id !== action.payload.id)
    case "ADDED_SONGS_TO_PLAYLIST":
      return [...oldState, action.payload]
    default:
      return oldState
  }
}

const searchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const searchTypeReducer = (oldState="songs", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TYPE":
      return action.payload
    case "RESET_SEARCH_PARAMETERS":
      return "songs"
    default:
      return oldState
  }
}

const loadingReducer = (oldState=false, action) => {
  // debugger
  switch (action.type) {
    case "LOADING_DATA":
      return true
    case "FETCHED_FAVORITES":
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

const artistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ARTISTS":
      return action.payload
    default:
      return oldState
  }
}

const albumsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ALBUMS":
      return action.payload
    default:
      return oldState
  }
}

const genresReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_GENRES":
      return action.payload
    default:
      return oldState
  }
}

const activeItemReducer = (oldState={}, action) => {
  switch (action.type) {
    case "FETCHED_ITEM":
      return action.payload
    case "RESET_ACTIVE_ITEM":
      return {}
    default:
      return oldState
  }
}

const selectedPlaylistReducer = (oldState=null, action) => {
  // debugger
  switch (action.type) {
    case "FETCHED_PLAYLISTS":
      return action.payload.length > 0 ? action.payload[0] : null
    case "CHANGE_SELECTED_PLAYLIST":
      return action.payload
    case "ADDED_SONGS_TO_PLAYLIST":
      return action.payload
    case "ORDER_PLAYLIST":
      return {...oldState, songs: action.payload}
    case "DELETE_PLAYLIST":
      return null
    default:
      return oldState
  }
}

const newPlaylistTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "UPDATE_NEW_PLAYLIST_TEXT":
      return action.payload
    case "ADDED_SONGS_TO_PLAYLIST":
      return ""
    default:
      return oldState
  }
}

const editingPlaylistReducer = (oldState={}, action) => {
  switch (action.type) {
    case "FETCHED_PLAYLIST_TO_EDIT":
      return action.payload
    default:
      return oldState
  }
}

const newPlaylistSongsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "ADD_NEW_PLAYLIST_SONG":
      return [...oldState, action.payload]
    case "REMOVE_NEW_PLAYLIST_SONG":
      return oldState.filter(s => s.id !== action.payload.id)
    case "ADDED_SONGS_TO_PLAYLIST":
      return []
    default:
      return oldState
  }
}

const songSearchResultsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_SONG_QUERY_DATA":
      return action.payload
    case "FETCHED_SINGLE_SONG_QUERY_DATA":
      return [...oldState, action]
    case "FETCHED_ALBUM_QUERY_DATA":
      return []
    case "FETCHED_ARTIST_QUERY_DATA":
      return []
    case "RESET_SEARCH_PARAMETERS":
      return []
    default:
      return oldState
  }
}

const artistSearchResultsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ARTIST_QUERY_DATA":
      return action.payload
    case "FETCHED_SONG_QUERY_DATA":
      return []
    case "FETCHED_ALBUM_QUERY_DATA":
      return []
    case "RESET_SEARCH_PARAMETERS":
      return []
    default:
      return oldState
  }
}

const albumSearchResultsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ALBUM_QUERY_DATA":
      return action.payload
    case "FETCHED_SONG_QUERY_DATA":
      return []
    case "FETCHED_ARTIST_QUERY_DATA":
      return []
    case "RESET_SEARCH_PARAMETERS":
      return []
    default:
      return oldState
  }
}

const genreSearchResultsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_GENRE_QUERY_DATA":
      return action.payload
    default:
      return oldState
  }
}

const sortTypeReducer = (oldState="name", action) => {
  switch (action.type) {
    case "UPDATE_SORT_TYPE":
      return action.payload
    default:
      return oldState
  }
}

const sortSearchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "UPDATE_SORT_SEARCH_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const publishedPlaylistsReducer = (oldState=[], action) => {
  switch(action.type) {
    case "FETCHED_PUBLISHED_PLAYLISTS":
      return action.payload
    case "SHARED_PLAYLIST":
      if (action.payload.published) {
        return [...oldState, action.payload]
      } else {
        return oldState.filter(p => p.id !== action.payload.id)
      }
    case "LIKED_PLAYLIST":
      return [...oldState.filter(p => p.id !== action.payload.id), action.payload]
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  searchText: searchTextReducer,
  searchType: searchTypeReducer,
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  genres: genresReducer,
  loading: loadingReducer,
  mySongs: mySongsReducer,
  myArtists: myArtistsReducer,
  myAlbums: myAlbumsReducer,
  myGenres: myGenresReducer,
  myPlaylists: myPlaylistsReducer,
  activeItem: activeItemReducer,
  selectedPlaylist: selectedPlaylistReducer,
  newPlaylistNameText: newPlaylistTextReducer,
  editingPlaylist: editingPlaylistReducer,
  newPlaylistSongs: newPlaylistSongsReducer,
  songSearchResults: songSearchResultsReducer,
  artistSearchResults: artistSearchResultsReducer,
  albumSearchResults: albumSearchResultsReducer,
  genreSearchResults: genreSearchResultsReducer,
  sortType: sortTypeReducer,
  sortSearchText: sortSearchTextReducer,
  publishedPlaylists: publishedPlaylistsReducer
})

export default rootReducer
