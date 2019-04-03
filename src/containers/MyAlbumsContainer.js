
import React, {Component} from 'react'
import Item from '../components/Item'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Albums:</h3>
        {this.props.items.map((i, index) => <Item key={i.id} data={i} title={this.props.title}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    title: "Albums",
    songs: state.myAlbums
  })
}

export default connect(mapStateToProps)(MyAlbumsContainer)
