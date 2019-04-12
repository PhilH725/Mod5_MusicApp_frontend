
import React, {Component} from 'react'
import SongItemFind from '../components/SongItemFind'
import {List} from 'semantic-ui-react'
import { connect } from 'react-redux'

class SearchResultsSongs extends Component {

  render() {
    return (
      <List celled>
        {this.props.songs ?
        this.props.songs.map((s, index) => <SongItemFind key={index} song={s} />)
        :
        "No results"}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.songSearchResults.filter(s => !state.mySongs.map(a => a.name).includes(s.name) && !state.mySongs.map(a => a.artist).includes(s.artistName))
})

export default connect(mapStateToProps)(SearchResultsSongs)
