
import React, {Component} from 'react'
import Item from '../components/Item'
import {connect} from 'react-redux'

class MyGenresContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Genres:</h3>
        {this.props.items.map((i, index) => <Item key={i.id} data={i} title={this.props.title}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    title: "Genres",
    songs: state.myGenres
  })
}

export default connect(mapStateToProps)(MyGenresContainer)
