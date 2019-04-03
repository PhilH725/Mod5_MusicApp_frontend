
import React, {Component} from 'react'
import MyMusicContainer from './MyMusicContainer'
import FindMusicContainer from './FindMusicContainer'
import PlaylistContainer from './PlaylistContainer'
import { Route, Switch } from 'react-router-dom'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <Switch>
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

export default MainContainer
