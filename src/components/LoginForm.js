import React, { Component } from 'react'


import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = { email: '', password: '' }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email:"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="example@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password:"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="********"
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
