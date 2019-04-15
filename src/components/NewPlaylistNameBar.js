// 
// import React, { Component } from 'react'
// import {updateNewPlaylistText} from '../redux/actionCreators'
// import { connect } from 'react-redux'
//
// class NewPlaylistNameBar extends Component {
//
//   render () {
//     return (
//       <div>
//         Enter Name: <input type="text" value={this.props.newPlaylistNameText} onChange={(e)=>{this.props.updateNewPlaylistText(e.target.value)}}/>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = state => ({
//   newPlaylistNameText: state.newPlaylistNameText
// })
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     updateNewPlaylistText: (text) => {dispatch(updateNewPlaylistText(text))}
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistNameBar)
