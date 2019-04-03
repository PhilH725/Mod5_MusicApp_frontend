
import React, {Component} from 'react'
import Item from '../components/Item'
import {connect} from 'react-redux'

class MyArtistsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Artists:</h3>
        {this.props.items.map((i, index) => <Item key={i.id} data={i} title={this.props.title}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    title: "Artists",
    songs: state.myArtists
  })
}

export default connect(mapStateToProps)(MyArtistsContainer)
