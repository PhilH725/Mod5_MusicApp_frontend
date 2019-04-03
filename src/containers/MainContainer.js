
import React, {Component} from 'react'
import MyMusicContainer from './MyMusicContainer'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'
import ItemShow from '../components/ItemShow'
import { Route, Switch } from 'react-router-dom'
import {connect} from 'react-redux'

// <Route path="/paintings/:id" render={(props)=> {
//   console.log(this.state.paintingsList)
//   let paintingId = props.match.params.id
//   let painting = this.state.paintingsList.find(p => p.id === paintingId)
//   console.log("painting exists?", painting)
//   return this.state.loading ? null : (
//     <PaintingDetails
//     painting={painting}
//     />
//   )
// }}/>
class MainContainer extends Component {

  render() {
    return (
      <div>
        <Switch>

          <Route path="/items/songs/:id" render={ (props) => {
            let songId = props.match.params.id
            // let song = this.props.songs.find(s => s.id === songId)
            // debugger
            return <ItemShow id={songId}/>
          }} />



          <Route exact path="/my_music" component={MyMusicContainer} />
          <Route exact path="/find_music" component={FindMusicContainer} />
          <Route exact path="/playlist" component={PlaylistContainer} />
          <Route exact path="/songs/undefined" component={PlaylistContainer} />
          <Route exact path="/" />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    songs: state.mySongs
  })
}

export default connect(mapStateToProps)(MainContainer)
