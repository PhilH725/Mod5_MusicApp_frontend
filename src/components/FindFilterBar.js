
import React, {Component, Fragment} from 'react'
import {Form, Button} from 'semantic-ui-react'
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
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Search</label>
            <input placeholder='search' onChange={(e) => this.handleChange(e.target.value)}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
        <Button.Group>
          <Button onClick={() => this.props.changeSearchType('songs')}>Songs</Button>
          <Button.Or />
          <Button onClick={() => this.props.changeSearchType('artists')}>Artists</Button>
          <Button.Or />
          <Button onClick={() => this.props.changeSearchType('albums')}>Albums</Button>
        </Button.Group>
      </Fragment>
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
