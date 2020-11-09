import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './index.css';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Container text>
            <div className="page-content-container" />
            <h1>Hello World!</h1>
          </Container>
        </main>
      </div>
    );
  }
}
export default App;
