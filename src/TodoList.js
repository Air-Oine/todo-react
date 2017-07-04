import React, { Component } from 'react';
import { ListView, Text } from 'react-native';

import Todo from './Todo'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let todo1 = new Todo('Go to aquaponey', true);
        let todo2 = new Todo('Save the world', false);
        this.state = {
            dataSource: ds.cloneWithRows([todo1, todo2]),
        };
    }

    render() {
        return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <TodoItem todo={rowData}></TodoItem>}
        />
        );
    }
    
}