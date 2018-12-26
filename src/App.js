import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 30}
    ]
  }

  switchNameHandler = () => {
    this.setState({people: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]});
  }
    nameChangedHandler = (event) => {
      this.setState({people: [
        {name: 'Maximilian', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
      ]});     
    }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.people[0].name}
          age={this.state.people[0].age}/>
        <Person
          name={this.state.people[1].name}
          changed={this.nameChangedHandler}
          age={this.state.people[1].age}/>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
