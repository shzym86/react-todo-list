import * as constants from './constants';
import axios from 'axios';

const _getTodoList = (data) => ({
  type: constants.GET_TODO_LIST,
  data
})

export const changeTitle = (title) => ({
  type: constants.CHANGE_TITLE,
  title
})

export const addItem = () => ({
  type: constants.ADD_ITEM,
})

export const deleteItem = (index) => ({
  type: constants.DELETE_ITEM,
  index
})

export const initList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then(res => {
      dispatch(_getTodoList(res.data))
    })
  }
}