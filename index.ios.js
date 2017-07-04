import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import TodoApplication from './src/TodoApplication'

export default class TodoApp extends Component {
  render() {
    return (
      <TodoApplication/>
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
