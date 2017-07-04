import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from './TodoList';

export default class TodoApplication extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        <TodoList/>
        );
    }
    
}