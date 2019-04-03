
import React, {Component} from 'react'
import {fetchingItem} from '../redux/actionCreators'
import {connect} from 'react-redux'

class ArtistShow extends Component {

  componentDidMount() {
    this.props.fetchingItem(this.props.type, this.props.id)
  }

  render() {
    return (
      this.props.activeItem ?
      <h1>{this.props.activeItem.name}</h1>
      :
      <div>
        <h3>Genre/Artist/Album/Song title</h3>
        <div>information on the selected thing</div>
        <div>{this.props.id}</div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)
