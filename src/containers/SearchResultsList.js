//
// import React, {Component} from 'react'
// import FindMusicItem from '../components/FindMusicItem'
// import { connect } from 'react-redux'
//
// // <div>
// //   {this.props.songs.length > 0 ?
// //   this.props.songs.map(s => <FindMusicItem key={s.id} data={s}/>)
// //   :
// //   "No results"}
// // </div>
//
// class SearchResultsList extends Component {
//
//   displayProperTypeDiv() {
//     switch (this.props.searchType) {
//       case "songs":
//         return (
//           <div> Searching songs </div>
//         )
//       case "artists":
//         return (
//           <div> Searching artists </div>
//         )
//       case "albums":
//         return (
//           <div> Searching songs </div>
//         )
//       case "genres":
//         return (
//           <div> Searching songs </div>
//         )
//     }
//   }
//
//   render() {
//     return this.displayProperTypeDiv()
//   }
// }
//
// const mapStateToProps = state => ({
//   searchType: state.searchType,
//   songs: state.songs.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()))
// })
//
// export default connect(mapStateToProps)(SearchResultsList)
