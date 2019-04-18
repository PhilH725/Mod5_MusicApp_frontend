
import React, {Component} from 'react'
import {Form, Button, Divider, Icon} from 'semantic-ui-react'
import {changeSearchType, queryLastFM} from '../redux/actionCreators'
import {connect} from 'react-redux'

class FindFilterBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: ""
    }
  }

  handleChange = (searchText) => {
    this.setState({searchText})
  }

  handleSubmit = () => {
    this.props.queryLastFM(this.state.searchText, this.props.searchType)
  }

  render() {
    return (
      <div className="ui equal width aligned padded grid">
        <div className="row">
          <div className="three wide column">
            <Form className="ui form" onSubmit={this.handleSubmit}>
              <div className="field">
                <input id="find-music-search-input" placeholder='search' onChange={(e) => this.handleChange(e.target.value)}/>
              </div>
              <Button type='submit' id="find-music-button" className="mini ui primary basic button" animated>
                <Button.Content visible>Find</Button.Content>
                <Button.Content hidden>
                  <Icon name="music" />
                </Button.Content>
              </Button>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="three wide column">
            <Button.Group id="find-music-filter-buttons" >
              <Button inverted color="facebook" onClick={() => this.props.changeSearchType('songs')}>Songs</Button>
              <Button.Or />
              <Button inverted color="vk" onClick={() => this.props.changeSearchType('artists')}>Artists</Button>
              <Button.Or />
              <Button inverted color="linkedin" onClick={() => this.props.changeSearchType('albums')}>Albums</Button>
            </Button.Group>
          </div>
        </div>
        <Divider/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchType: state.searchType
})

const mapDispatchToProps = dispatch => {
  return {
    changeSearchType: (searchType) => dispatch(changeSearchType(searchType)),
    queryLastFM: (searchVal, searchType) => dispatch(queryLastFM(searchVal, searchType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindFilterBar)
