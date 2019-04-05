
import React from 'react'
import {Link} from 'react-router-dom'

const GenreItem = (props) => {

  return (
    <div>
      <h4>
        <Link to={`/items/artists/${props.genre.id}`}>
        {props.genre.name}
        </Link>
      </h4>
    </div>
  )
}

export default GenreItem
