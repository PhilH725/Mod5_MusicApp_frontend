
import React, {Component} from 'react'
import MusicItemList from './MusicItemList'
import {connect} from 'react-redux'

class MyMusicContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Music:</h2>
        <MusicItemList title={'Genres'} items={this.props.mySongs}/>
        <MusicItemList title={'Artists'} items={this.props.mySongs}/>
        <MusicItemList title={'Albums'} items={this.props.mySongs}/>
        <MusicItemList title={'Songs'} items={this.props.mySongs}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return ({
    mySongs: state.mySongs
  })
}

export default connect(mapStateToProps)(MyMusicContainer)
