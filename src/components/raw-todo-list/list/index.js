import React, { Component } from 'react'

class List extends Component {

  render() {
    const list = this.props.data
    return (
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleClick.bind(this, index)}>
                {item}
              </li>
            )
          })
        }
      </ul>
    )
  }

  handleClick(index) {
    this.props.deleteItem(index)
  }
}

export default List