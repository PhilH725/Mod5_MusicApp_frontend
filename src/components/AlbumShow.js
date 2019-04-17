//
// import React, {Component} from 'react'
// import Item from './Item'
// import {fetchingItem} from '../redux/actionCreators'
// import {connect} from 'react-redux'
//
// class AlbumShow extends Component {
//
//   componentDidMount() {
//     this.props.fetchingItem(this.props.type, this.props.id)
//   }
//
//   render() {
//     return (
//       this.props.activeItem.songs ?
//       <div>
//         <h1>{this.props.activeItem.name}</h1>
//         <h3>Released: {this.props.activeItem.release_year}</h3>
//         <h3>Tracklist:</h3>
//         {this.props.activeItem.songs.map(s => <Item key={s.id} title={"songs"} data={s} />)}
//       </div>
//       :
//       <h3>Loading...</h3>
//     )
//   }
// }
//
// const mapStateToProps = state => {
//   return {
//     activeItem: state.activeItem
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchingItem: () => dispatch(fetchingItem(ownProps.type, ownProps.id))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
