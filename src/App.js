import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import RawTodo from './components/raw-todo-list'
import ReduxTodo from './components/redux-todo-list'

class App extends Component {
  render() {
    return (
      <div>
        <h2>原生 React 实现的 Todo List</h2>
        <RawTodo />

        <br /><br />

        <h2>使用 Redux 和 Ant Design 构建的 Todo List</h2>
        <ReduxTodo />
      </div>
    );
  }
}

export default App;
