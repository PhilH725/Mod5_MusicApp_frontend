
import React from 'react'
import SongItemFind from '../components/SongItemFind'
import {List} from 'semantic-ui-react'
import { connect } from 'react-redux'

const SearchResultsSongs = (props) => {

  return (
    <List celled>
      {props.songs.length > 0 ?
      props.songs.map(s => <SongItemFind key={s.id} song={s} />)
      :
      "No results"}
    </List>
  )
}

const mapStateToProps = state => ({
  songs: state.songs.filter(s => s.name.toLowerCase().includes(state.searchText.toLowerCase()) &&
    !state.mySongs.map(s => s.id).includes(s.id))
})

export default connect(mapStateToProps)(SearchResultsSongs)
