
import React from 'react'
import {connect} from 'react-redux'
import {changeSearchText} from '../redux/actionCreators'

class FindFilterBar extends React.Component {

  render() {
    return (
      <div>
        <input type='text' value={this.props.searchVal} onChange={(e) => {this.props.search(e.target.value)}} />
        <select>
          <option value="all">No Filter</option>
          <option value="genre">Genres</option>
          <option value="artist">Artists</option>
          <option value="album">Albums</option>
          <option value="song">Songs</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchVal
})

const mapDispatchToProps = (dispatch) => {
  return {
    search: (text) => {dispatch(changeSearchText(text))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FindFilterBar)
