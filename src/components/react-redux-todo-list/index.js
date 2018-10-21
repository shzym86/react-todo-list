import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Input from './components/input';
import List from './components/list';

class Todo extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        {/* Provider下面只能有一个子节点 */}
        <div>
          <Input />
          <List />
        </div>
      </Provider>
    )
  }
}

export default Todo;