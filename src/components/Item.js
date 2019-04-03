
import React from 'react'
import ItemShow from '../components/ItemShow'
import {Link} from 'react-router-dom'

const Item = (props) => {

  return (
    <div>
      <h4>
        <Link to={`/items/${props.title.toLowerCase()}/id`}>
        {props.data.name}
        </Link>
      </h4>
    </div>
  )
}

export default Item
