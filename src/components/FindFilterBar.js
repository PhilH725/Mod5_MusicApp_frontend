
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeSearchText} from '../redux/actionCreators'
import {changeSearchType} from '../redux/actionCreators'

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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchVal: state.searchVal
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: text => dispatch(changeSearchText(text)),
    changeSearchType: type => dispatch(changeSearchType(type))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FindFilterBar)
