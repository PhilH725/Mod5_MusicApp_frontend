
import React, {Component} from 'react'
import PlaylistSongItem from '../components/PlaylistSongItem'
import {Header, Grid, List} from 'semantic-ui-react'
import {orderPlaylist} from '../redux/actionCreators'
// import Sortable from 'react-sortablejs'
// import uniqueId from 'lodash/uniqueId'
import { connect } from 'react-redux'

// render() {
//   const items = this.props.items.songs.map(val => (<li key={uniqueId()} data-id={val}>{`${val.name} - ${val.artist}`}</li>))
//   console.log(items)
//   console.log(this.props.selectedPlaylist.songs)
//   return (
//     <div>
//       <Sortable
//         tag="ul" // Defaults to "div"
//         onChange={(order, sortable, evt) => this.props.orderPlaylist(order)}
//         >
//         {items}
//       </Sortable>
//     </div>
//   );
// }


class SelectedPlaylist extends Component {

  render() {
    console.log(this.props.selectedPlaylist)
    return (
      this.props.selectedPlaylist ?
      <Grid.Column floated="right" width={12}>
        <Header as="h3">
          {this.props.selectedPlaylist.name}
        </Header>
        <List animated divided verticalAlign='middle'>
          {this.props.selectedPlaylist.songs.map(s => <PlaylistSongItem key={s.id} song={s} />)}
        </List>
      </Grid.Column>
      :
      <Grid.Column floated="right" width={12}>
        <h3>Choose or Create a playlist</h3>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist,
  items: state.selectedPlaylist
})

const mapDispatchToProps = dispatch => {
  return {
    orderPlaylist: (songs) => dispatch(orderPlaylist(songs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPlaylist)
