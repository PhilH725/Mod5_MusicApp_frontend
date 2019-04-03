
import React from 'react'
import { connect } from 'react-redux'

const NewPlaylistBar = () => {

  return (
    <div>
      <input type="text" />
      <button>Create New</button>
    </div>
  )

}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistBar)
