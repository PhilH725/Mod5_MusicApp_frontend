
import React from 'react'
import SongItemFind from '../components/SongItemFind'
import { connect } from 'react-redux'

const SearchResultsSongs = (props) => {

  return (
    <div>
      {props.songs.length > 0 ?
      props.songs.map(s => <SongItemFind key={s.id} song={s}/>)
      :
      "No results"}
    </div>
  )
}

const mapStateToProps = state => ({
  songs: state.songs.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()))
})

export default connect(mapStateToProps)(SearchResultsSongs)
