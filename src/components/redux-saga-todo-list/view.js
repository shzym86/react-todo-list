import React from 'react'
import { Input, Button, List } from 'antd'

// 定义一个无状态组件作为项目的UI组件，只负责渲染页面
const TodoListUI = (props) => {
  return (
    <div>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: '300px' }}
        onChange={props.handleInputChange} />
      <Button
        type="primary"
        onClick={props.handleBtnClick}
      >提交</Button>
      <List
        bordered
        style={{ width: '300px', marginTop: '10px' }}
        dataSource={props.list}
        renderItem={
          (item, index) => (
            // 这个方法需要传参，不能在构造函数中bind作用域，必须每次动态绑定this并传参
            // 如果写成 this.handleItemDelete(index) 就相当于直接执行了！
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )
        }
      />
    </div>
  )
}

export default TodoListUI