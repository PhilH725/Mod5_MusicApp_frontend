
import React, {Component} from 'react'
import FindMusicItem from '../components/FindMusicItem'
import { connect } from 'react-redux'

class SearchResultsList extends Component {

  render() {
    return (
      <div>
        {this.props.songs.length > 0 ?
        this.props.songs.map(s => <FindMusicItem key={s.id} data={s}/>)
        :
        "No results"}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchVal,
  songs: state.songs.filter(s => s.name.toLowerCase().includes(state.searchVal.toLowerCase()))
})

export default connect(mapStateToProps)(SearchResultsList)
