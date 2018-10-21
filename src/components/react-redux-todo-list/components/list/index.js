import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';

class List extends PureComponent {
  render() {
    const { list, handleClick } = this.props;
    return (
      <ul>
        {
          list.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>{item}</li>
          ))
        }
      </ul>
    )
  }
  
  componentDidMount() {
    this.props.handleMounted();
  }
}

const mapState = (state) => ({
  // list: state.list
  list: state.get('list')
})

const mapDispatch = (dispatch) => ({
  handleMounted() {
    dispatch(actionCreators.initList())
  },
  handleClick(index) {
    dispatch(actionCreators.deleteItem(index))
  }
})
 
export default connect(mapState, mapDispatch)(List);