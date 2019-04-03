
import React, {Component} from 'react'
import {fetchingItem} from '../redux/actionCreators'
import {connect} from 'react-redux'

class AlbumShow extends Component {

  componentDidMount() {
    this.props.fetchingItem(this.props.type, this.props.id)
  }

  render() {
    return (
      this.props.activeItem ?
      <div>
        <h1>{this.props.activeItem.name}</h1>
        <p>Info on this genre goes here...</p>
      </div>
      :
      <h3>Loading...</h3>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchingItem: () => dispatch(fetchingItem(ownProps.type, ownProps.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
