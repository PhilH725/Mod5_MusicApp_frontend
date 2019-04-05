
import React from 'react'
import {Link} from 'react-router-dom'

const SongItem = (props) => {

  return (
    <div>
      <h4>
        <Link to={`/items/songs/${props.song.id}`}>
          {props.song.name}
        </Link>
      </h4>
    </div>
  )
}

export default SongItem
