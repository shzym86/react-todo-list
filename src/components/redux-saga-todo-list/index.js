import React, { Component } from 'react'
import store from './store'
import TodoListUI from './view'

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
} from './store/actionCreators'

class Todos extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  // 组件挂载之后去请求初始化的Todolist数据
  componentDidMount() {
    const action = getTodoList()
    // 这里派发的action会被sagas中间件拦截并处理
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

}

export default Todos