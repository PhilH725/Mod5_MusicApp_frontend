
import React from 'react'
import {Link} from 'react-router-dom'

const AlbumItem = (props) => {

  return (
    <div>
      <h4>
        <Link to={`/items/albums/${props.album.id}`}>
        {props.album.name}
        </Link>
      </h4>
    </div>
  )
}

export default AlbumItem
