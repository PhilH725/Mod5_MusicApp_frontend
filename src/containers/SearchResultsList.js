
import React, {Component} from 'react'
import FindMusicItem from '../components/FindMusicItem'
import { connect } from 'react-redux'

class SearchResultsList extends Component {

  render() {
    return (
      <div>
        {this.props.songs.length > 0 ?
        this.props.songs.filter(f => f.name.toLowerCase().includes(this.props.searchVal)).map(s => <FindMusicItem key={s.id} data={s}/>)
        :
        "No results"}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchVal
})

export default connect(mapStateToProps)(SearchResultsList)
