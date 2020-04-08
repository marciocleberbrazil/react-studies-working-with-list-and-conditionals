import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    let userInput = this.state.userInput;

    userInput = event.target.value;

    this.setState({
      userInput: userInput
    });
  }

  removeLetterFromArray = (letterIndex) => {
    const userInput = this.state.userInput.split('');
    userInput.splice(letterIndex, 1);

    this.setState({userInput: userInput.join('')});
  }

  render() {
    let showStringSize = null;
    if(this.state.userInput.length > 0) {
      showStringSize = (<p>Text size: {this.state.userInput.length}</p>);
    }

    const charList = this.state.userInput.split('').map((character, index) => {
      return <Char
        letter={character}
        key={index}
        remove={() => this.removeLetterFromArray(index)} />
    });

    return (
      <div className="App">
        <input onChange={(event) => this.inputChangedHandler(event)} value={this.state.userInput} type="text" />
        {showStringSize}

        <Validation stringSize={this.state.userInput.length} />

        {charList}
      </div>
    );
  }
}

export default App;
