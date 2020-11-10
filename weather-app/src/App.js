import React from 'react';
import { Container } from 'semantic-ui-react';
import './index.css';
import Header from './components/header';
import Main from './components/main';

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
        </header><main>
          <Container text>
            <Main />
          </Container>
        </main>
      </div>
    );
  }
}
export default App;
