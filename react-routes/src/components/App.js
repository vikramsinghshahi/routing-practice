import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import '../style/index.css';

export default class App extends React.Component {
  state = {
    navClosed: false,
  };
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };
  render() {
    return (
      <div className={`container ${this.state.navClosed && 'nav-closed'}`}>
        <Header changeNavbar={this.changeNavbar} />
        <div className="main">
          {/* <h2>This is App component</h2> */}
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}
