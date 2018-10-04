import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ""
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={this.changeHandle.bind(this)} />
        <button onClick={this.handleSubmit.bind(this)}>Add</button>
      </div>
    )
  }

  changeHandle(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit() {
    const title = this.state.title
    const addTitle = this.props.addTitle
    addTitle(title)
    this.setState({
      title: ""
    })
  }
}

export default Input