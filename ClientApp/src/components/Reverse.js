import React, { Component } from 'react';

export class Reverse extends Component {
  static displayName = Reverse.name;

  constructor(props) {
    super(props);
    this.state = { currentString: "" };
    this.reverseString = this.reverseString.bind(this);
  }

  reverseString(event) {
      this.setState({
          currentString: this.reverseMe(event.target.value)
    });
  }

  reverseMe(str) {
    str = str.split(''); //split the entered string 
    str = str.reverse(); //reverse the order 
    str = str.join(''); //then join the reverse order array values
    return str;
  }


  render() {
    return (
      <div>
        <h1>String Reverse</h1>

        <p>This is a simple example of a React component that will reverse the characters contained in the text box as you type.</p>

        <p aria-live="polite">String: <strong>{this.state.currentString}</strong></p>

        <input placeholder="50 characters max" size="50" type="text" id="textCount" onChange={this.reverseString}></input>
      </div>
    );
  }
}
