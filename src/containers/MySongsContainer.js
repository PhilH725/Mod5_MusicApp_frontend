
import React, {Component} from 'react'
import Item from '../components/Item'
import {connect} from 'react-redux'

class MySongsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Songs:</h3>
        {this.props.items.map((i, index) => <Item key={i.id} data={i} title={this.props.title}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    title: "Songs",
    songs: state.mySongs
  })
}

export default connect(mapStateToProps)(MySongsContainer)
