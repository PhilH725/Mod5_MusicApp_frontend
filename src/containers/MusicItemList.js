
import React, {Component} from 'react'
import Item from '../components/Item'

class MusicItemList extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Item />
        <Item />
      </div>
    )
  }
}

export default MusicItemList
