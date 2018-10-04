import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

// state 相当于整个 store 仓库中存放的数据
const defaultState = {
  inputValue: "",
  list: []
}

// state 指的是 store 中上一次存放的数据，即 prevState
// action 指的是用户传过来的修改意图，包含了需要修改 state 的值
// reducer 的作用就是拿到新的数据并做处理，之后返回给 store 一个 newState

export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    // reducer 可以接收 state，但绝不能修改 state，所以要拷贝一份来修改
    const newState = JSON.parse(JSON.stringify(state))  // 深拷贝
    // 更新状态
    newState.inputValue = action.value
    // 返回给 store，store 接受到了之后会自动更新之前的数据
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.list.push(newState.inputValue)
    newState.inputValue = ""

    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))

    newState.list.splice(action.index, 1)

    return newState
  }

  return state
}