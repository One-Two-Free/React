import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

import Todo from './Todo.jsx';

@connect(mapStateToProps, { toggleTodo })
export default class TodoList extends Component {
    render() {
        return (
            <div className="base">
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                        />
                    )
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    };
}
