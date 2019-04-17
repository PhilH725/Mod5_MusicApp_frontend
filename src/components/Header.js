
import React from 'react'
import {Image} from 'semantic-ui-react'

// <h1 className="ui header" id="site-header">SpotiPhil</h1>
const Header = () => {

  return (
    <div className="ui header" id="site-header">
      <Image id="official-logo" src={require('../img/spotiphil5.png')}/>
      <div id="site-name">SpotiPhil</div>
    </div>
  )
}

export default Header
