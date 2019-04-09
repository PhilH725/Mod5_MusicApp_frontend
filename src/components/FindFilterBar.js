
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeSearchText, changeSearchType, queryLastFM} from '../redux/actionCreators'
import {key} from '../secretKey'

class FindFilterBar extends Component {

  render() {
    return (
      <div>
        <input type='text' value={this.props.searchVal} onChange={(e) => {this.props.changeSearchText(e.target.value)}} />
        <select onChange={(e)=>this.props.changeSearchType(e.target.value)}>
          <option value="songs">Songs</option>
          <option value="artists">Artists</option>
          <option value="albums">Albums</option>
          <option value="genres">Genres</option>
        </select>
        <button onClick={() => this.props.queryLastFM(this.props.searchVal, key())}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchText
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: text => dispatch(changeSearchText(text)),
    changeSearchType: type => dispatch(changeSearchType(type)),
    queryLastFM: (searchVal, key) => dispatch(queryLastFM(searchVal, key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FindFilterBar)
