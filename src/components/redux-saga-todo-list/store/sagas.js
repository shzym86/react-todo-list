import { put, takeEvery } from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import { initTodoAction } from './actionCreators'
import axios from 'axios'

function* getTodoList() {
  try {
    // 使用 Charles 配置系统代理
    // 将本地的json文件映射到 http://localhost:3000/list.json
    const res = yield axios.get('/api/list.json')
    // 常规地派发 action 给 reducer 处理
    const action = initTodoAction(res.data)
    yield put(action)
  } catch(e) {
    console.log('网络连接失败')
  }
}

function* mySaga() {
  // 希望捕获到派发的action类型为GET_TODO_LIST
  // 执行回调函数 getTodoList()
  yield takeEvery(GET_TODO_LIST, getTodoList);
}

export default mySaga;