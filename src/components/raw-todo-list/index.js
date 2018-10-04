import React, { Component } from 'react'
import List from './list/index'
import Input from './input/index'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <div>
        {/* 传递一个函数到Input组件，函数绑定的是当前组件的实例 */}
        <Input addTitle={this.addTitle.bind(this)} />
        {/* 将当前的列表传递给List组件，让他去渲染DOM */}
        <List data={this.state.list} deleteItem={this.deleteItem.bind(this)} />
      </div>
    )
  }
  addTitle(title) {
    const { list } = this.state
    // this.setState({
    //   list: currentList.concat(title)
    // })
    // setState是一个异步过程
    this.setState(() => ({
      list: list.concat(title)
    }))
  }
  deleteItem(index) {
    const newList = [...this.state.list]
    newList.splice(index, 1)
    this.setState(() => ({
      list: newList
    }))
  }
}

export default Todo