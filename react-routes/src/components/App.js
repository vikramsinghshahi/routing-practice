import React from 'react';
import data from '../data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  render() {
    console.log(data);
    return (
      <>
        <h1>This is App component</h1>
      </>
    );
  }
}

export default App;
