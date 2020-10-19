import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.countChars = this.countChars.bind(this);
  }

  countChars(event) {
      this.setState({
          currentCount: event.target.value.length
    });
  }

  render() {
    return (
      <div>
        <h1>Character Counter</h1>

        <p>This is a simple example of a React component that will count the characters contained in the text box as you type.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <textarea cols="70" rows="20" type="text" id="textCount" onChange={this.countChars}></textarea>
      </div>
    );
  }
}
