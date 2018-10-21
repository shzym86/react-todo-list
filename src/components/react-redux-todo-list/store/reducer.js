import * as constants from './constants';
import { fromJS } from 'immutable';

// 项目中 store 的数据存放在 defaultState 里面
const defaultState = fromJS({
  title: "",
  list: []
})

// 派发action的逻辑代码比较多，拆分开来增加可读性
const changeTitle = (state, action) => {
  // return Object.assign({}, state, { title: action.title });
  return state.set('title', action.title);
}

const addItem = (state, action) => {
  const list = [...state.get('list')];
  list.push(state.get('title'));
  // return Object.assign({}, state, { list, title: "" });
  return state.merge({ list, title: ""});
}

const getTodoList = (state, action) => {
  // return Object.assign({}, state, { list: action.data });
  return state.set('list', action.data);
}

const deleteItem = (state, action) => {
  const list = [...state.get('list')];
  list.splice(action.index, 1);
  // return Object.assign({}, state, { list });
  return state.set('list', list);
}

// 将更新后的 newState 返回给组件
export default (state = defaultState, action) => {
  switch (action.type) {
    // 输入监听
    case constants.CHANGE_TITLE:
      return changeTitle(state, action);
    // 添加项，清空输入
    case constants.ADD_ITEM:
      return addItem(state, action);
    // 初始化列表
    case constants.GET_TODO_LIST:
      return getTodoList(state, action);
    // 删除某一列表项
    case constants.DELETE_ITEM:
      return deleteItem(state, action);
    default:
      return state;
  }
}