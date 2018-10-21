import { GET_TODO_LIST, INIT_TODO_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

// 使用箭头函数动态创建不同的 action 对象

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initTodoAction = (data) => ({
  type: INIT_TODO_LIST,
  data
})

export const getTodoList = () => ({
  type: GET_TODO_LIST
})