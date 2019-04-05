
import React, {Component} from 'react'
import SongItem from '../components/SongItem'
import {connect} from 'react-redux'

class MySongsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Songs:</h3>
        {this.props.songs.map(s => <SongItem key={s.id} song={s} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    title: "Songs",
    songs: state.mySongs
  })
}

export default connect(mapStateToProps)(MySongsContainer)
