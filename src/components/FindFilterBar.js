
import React from 'react'

const FindFilterBar = () => {

  return (
    <div>
      <input type='text' />
      <select>
        <option value="all">No Filter</option>
        <option value="genre">Genres</option>
        <option value="artist">Artists</option>
        <option value="album">Albums</option>
        <option value="song">Songs</option>
      </select>
    </div>
  )
}

export default FindFilterBar
