
import React from 'react'
import {Link} from 'react-router-dom'

const ArtistItem = (props) => {

  return (
    <div>
      <h4>
        <Link to={`/items/artists/${props.artist.id}`}>
        {props.artist.name}
        </Link>
      </h4>
    </div>
  )
}

export default ArtistItem
