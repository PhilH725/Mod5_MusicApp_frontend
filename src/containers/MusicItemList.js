
import React, {Component} from 'react'
import Item from '../components/Item'

class MusicItemList extends Component {

  render() {
    // debugger
    return (
      <div>
        <h3>{this.props.title}</h3>
        {this.props.items.map(i => <Item key={i.id} data={i} />)}
      </div>
    )
  }
}

export default MusicItemList
