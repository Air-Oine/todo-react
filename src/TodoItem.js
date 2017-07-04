import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

import Todo from './Todo'

export default class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.todo = props.todo;
        
        this.styleSwitch = StyleSheet.create({
            textDecorationLine: (this.todo.isDone) ? 'line-through' : 'none'
        });
    }

    //Handle switch value change
    changeValue(newValue) {
        this.todo.isDone = newValue
    }

    render() {
        return (
        <View>
            <Text style={{textDecorationLine: (this.todo.isDone) ? 'line-through' : 'none'}}>
                {this.todo.title.toUpperCase()}</Text>
            <Switch 
                value={this.todo.isDone}
                onValueChange={(newValue) => this.changeValue(newValue)}></Switch>
        </View>
        );
    }
    
}

