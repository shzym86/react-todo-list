import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

// UI组件必须传递一个 props 参数
// 只有容器组件才有 this.props
const Input = (props) => {
  const { title, handleInput, addItem } = props
  return (
    <div>
      <input 
        type="text" 
        value={title} 
        onChange={handleInput}
      />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

const mapState = (state) => ({
  // title: state.title
  title: state.get('title')
})

const mapDispatch = (dispatch) => ({
  handleInput(e) {
    const title = e.target.value
    dispatch(actionCreators.changeTitle(title))
  },
  addItem() {
    dispatch(actionCreators.addItem())
  }
})

export default connect(mapState, mapDispatch)(Input);