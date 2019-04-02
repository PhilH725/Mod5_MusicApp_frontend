
import React, {Component} from 'react'
import FindFilterBar from '../components/FindFilterBar'
import SearchResultsList from './SearchResultsList'

class FindMusicContainer extends Component {

  constructor() {
    super()
    this.state = {
      songs: [],
      searchVal: "i still"
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/songs')
    .then(res => res.json())
    .then(songs => this.setState({songs}))
  }

  filterSearch = (e) => {
    this.setState({searchVal: e.target.value})
  }

  render() {
    return (
      <div>
        <h2>Find new music:</h2>
        <FindFilterBar />
        <SearchResultsList songs={this.state.songs}/>
      </div>
    )
  }
}

export default FindMusicContainer
