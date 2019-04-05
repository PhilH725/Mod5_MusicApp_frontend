
import React from 'react'
import GenreItemFind from '../components/GenreItemFind'
import { connect } from 'react-redux'

const SearchResultsGenres = (props) => {

  return (
    <div>
      {props.genres.length > 0 ?
      props.genres.map(s => <GenreItemFind key={s.id} album={s}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  genres: state.genres.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(SearchResultsGenres)
