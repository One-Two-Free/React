import React, { Component } from 'react';

import styles from './Todo.less';

export default class Todo extends Component {
    render() {
        const { text, completed, onToggle } = this.props;

        return (
            <div
                className={styles.root}
            >
                {text}
            </div>
        );
    }
}
