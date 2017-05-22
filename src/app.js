import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyB3JcPl3zm150wR8VwBkUsmGNmlO6RNT7k",
    authDomain: "authreactnative-8a6aa.firebaseapp.com",
    databaseURL: "https://authreactnative-8a6aa.firebaseio.com",
    projectId: "authreactnative-8a6aa",
    storageBucket: "authreactnative-8a6aa.appspot.com",
    messagingSenderId: "452778140409"
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
