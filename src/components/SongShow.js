//
// import React, {Component} from 'react'
// import {fetchingItem} from '../redux/actionCreators'
// import {connect} from 'react-redux'
//
// class SongShow extends Component {
//
//   componentDidMount() {
//     this.props.fetchingItem(this.props.type, this.props.id)
//   }
//
//   render() {
//     return (
//       this.props.activeItem.genre ?
//       <div>
//         <h1>{this.props.activeItem.name}</h1>
//         <h3>Artist: {this.props.activeItem.artist.name}</h3>
//         <h3>Album: {this.props.activeItem.album.name}</h3>
//         <h3>Genre: {this.props.activeItem.genre.name}</h3>
//       </div>
//       :
//       <div>
//         <h3>Loading...</h3>
//       </div>
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
// export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
