
import React, {Component} from 'react'
import Item from './Item'
import {fetchingItem} from '../redux/actionCreators'
import {connect} from 'react-redux'

class ArtistShow extends Component {

  componentDidMount() {
    this.props.fetchingItem(this.props.type, this.props.id)
  }

  render() {
    return (
      this.props.activeItem.albums ?
      <div>
        <h1>{this.props.activeItem.name}</h1>
        <h3>Albums: </h3>
        {this.props.activeItem.albums.map(a => <Item key={a.id} title={"albums"} data={a} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow)
