
import React, {Component} from 'react'
import SongItemFind from '../components/SongItemFind'
import {List, Header} from 'semantic-ui-react'
import { connect } from 'react-redux'

class SearchResultsSongs extends Component {

  render() {
    return (
      <List celled>
        {this.props.songs.length > 0 ?
        this.props.songs.map((s, index) => <SongItemFind key={index} song={s} />)
        :
        <Header id="no-results-header" as="h4">No results</Header>}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.songSearchResults.filter(s => !state.mySongs.map(a => a.name).includes(s.name) && !state.mySongs.map(a => a.artist).includes(s.artistName))
})

export default connect(mapStateToProps)(SearchResultsSongs)
