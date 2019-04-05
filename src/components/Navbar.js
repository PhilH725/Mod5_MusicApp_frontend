
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="navbar">
      <Link to={"/my_songs"}>My Songs</Link>
      <Link to={"/my_playlists"}>My Playlists</Link>
      <Link to={"/my_artists"}>My Artists</Link>
      <Link to={"/my_albums"}>My Albums</Link>
      <Link to={"/my_genres"}>My Genres</Link>
    </div>
  )
}

export default Navbar
