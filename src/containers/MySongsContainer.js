
import React, {Component} from 'react'
import SongItem from '../components/SongItem'
import {Item} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MySongsContainer extends Component {

  render() {
    return (
      <Item.Group divided>
        <h3>My Songs:</h3>
        {this.props.songs.map(s => <SongItem key={s.id} song={s} />)}
      </Item.Group>
    )
  }
}

const mapStateToProps = state => {
  return ({
    songs: state.mySongs
  })
}

export default connect(mapStateToProps)(MySongsContainer)
