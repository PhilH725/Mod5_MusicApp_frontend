
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="ui menu small">
      <Link to={"/my_songs"} className="item">My Songs</Link>
      <Link to={"/my_playlists"} className="item">My Playlists</Link>
      <Link to={"/my_artists"} className="item">My Artists</Link>
      <Link to={"/my_albums"} className="item">My Albums</Link>
      <Link to={"/my_genres"} className="item">My Genres</Link>
      <Link to={"/find_music"} className="item">Find Music</Link>
    </div>
  )
}

export default Navbar
