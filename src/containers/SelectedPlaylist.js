
import React, {Component} from 'react'
import PlaylistSongItem from '../components/PlaylistSongItem'
import {Header, Grid, List} from 'semantic-ui-react'
import Sortable from 'react-sortablejs'
import uniqueId from 'lodash/uniqueId'
import { connect } from 'react-redux'

// render() {
//   return (
//     this.props.selectedPlaylist ?
//     <Grid.Column floated="right" width={12}>
//       <Header as="h3">
//         {this.props.selectedPlaylist.name}
//       </Header>
//       <List animated celled verticalAlign='middle'>
//         {this.props.selectedPlaylist.songs.map(s => <PlaylistSongItem key={s.id} song={s} />)}
//       </List>
//     </Grid.Column>
//     :
//     <Grid.Column floated="right" width={12}>
//       <h3>Choose or Create a playlist</h3>
//     </Grid.Column>
//   )
// }


// <Sortable
//     tag="ul" // Defaults to "div"
//     onChange={(order, sortable, evt) => {
//         this.setState({ items: order });
//     }}
// >
//     items
// </Sortable>

class SelectedPlaylist extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     items: this.props.selectedPlaylist
  //   }
  // }

    render() {
      console.log(this.props.selectedPlaylist)
      console.log(this.props.items)
        // const items = this.props.items.map(val => (<li key={uniqueId()} data-id={val}>{val}</li>));

        return (
            <div>
            hi

            </div>
        );
    }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist,
  items: state.selectedPlaylist
})

export default connect(mapStateToProps)(SelectedPlaylist)
