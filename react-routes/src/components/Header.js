import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
