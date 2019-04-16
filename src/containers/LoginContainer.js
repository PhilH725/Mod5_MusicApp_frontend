
import React, {Component} from 'react'
import { withRouter } from "react-router"
import { Button, Form, Segment } from "semantic-ui-react"
import {Link} from 'react-router-dom'
import {authenticatingUser} from '../redux/actionCreators'
import {connect} from 'react-redux'

class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  render(){
    return (
      <Segment>
        <Form
          onSubmit={() => this.props.authenticatingUser(this.state.username, this.state.password)}
          size="mini"
          key="mini"
        >
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit" inverted color="vk">Login</Button>
          <Link to="/create_account"><Button floated="right" inverted color="linkedin">Create New Account</Button></Link>
        </Form>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticatingUser: (username, password) => dispatch(authenticatingUser(username, password))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginContainer))
