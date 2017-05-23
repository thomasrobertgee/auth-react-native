import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state={ loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyB3JcPl3zm150wR8VwBkUsmGNmlO6RNT7k",
    authDomain: "authreactnative-8a6aa.firebaseapp.com",
    databaseURL: "https://authreactnative-8a6aa.firebaseio.com",
    projectId: "authreactnative-8a6aa",
    storageBucket: "authreactnative-8a6aa.appspot.com",
    messagingSenderId: "452778140409"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
