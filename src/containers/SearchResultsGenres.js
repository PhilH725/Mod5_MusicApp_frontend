//
// import React from 'react'
// import GenreItemFind from '../components/GenreItemFind'
// import { connect } from 'react-redux'
//
// const SearchResultsGenres = (props) => {
//
//   return (
//     <div>
//       {props.genres.length > 0 ?
//       props.genres.map((g, index) => <GenreItemFind key={index} genre={g}/>)
//       :
//       "No results"}
//     </div>
//   )
// }
//
// const mapStateToProps = state => ({
//   // genres: state.genres.filter(g => g.name.toLowerCase().includes(state.searchText.toLowerCase()) &&
//   //   !state.myGenres.map(g => g.id).includes(g.id))
//   genres: state.genreSearchResults
// })
//
// export default connect(mapStateToProps)(SearchResultsGenres)
