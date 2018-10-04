import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from './store/actionCreators'

class Todos extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // 监听 store 的变化
    // 参数可接收一个函数，只要 store 一改变就会执行该回调
    // 一旦感知到 store 的数据变化了，就立即去 store 中重新获取一次最新的数据
    // 再利用 setState 替换掉组件中绑定的数据
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <div>
        <Input 
          value={this.state.inputValue} 
          placeholder="todo info" 
          style={{width: '300px'}}
          onChange={this.handleInputChange} />
        <Button 
          type="primary"
          onClick={this.handleBtnClick}
        >提交</Button>
        <List
          bordered
          style={{width: '300px', marginTop: '10px'}} 
          dataSource={this.state.list}
          renderItem={
            (item, index) => (
              // 这个方法需要传参，不能在构造函数中bind作用域，必须每次动态绑定this并传参
              // 如果写成 this.handleItemDelete(index) 就相当于直接执行了！
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </List.Item>
            )
          }
        />
      </div>
    )
  }

  handleInputChange(e) {
    // 创建 action 对象，包含动作的意义和传值数据
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }

    // 使用 Action Creator 创建 action
    const action = getInputChangeAction(e.target.value)

    // 调用 dispatch Api 将 action 传给 store
    // 此时 store 接收到了要改变的数据，但自己还不知道如何处理
    // store 会自动把当前 store 中的数据和接收到 action 中包含的数据一起转发给 reducer
    // 由 reducer 来处理数据应该如何变化
    store.dispatch(action)
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }

    const action = getAddItemAction()

    store.dispatch(action)
  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    
    const action = getDeleteItemAction(index)

    store.dispatch(action)
  }

}

export default Todos