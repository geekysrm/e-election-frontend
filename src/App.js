import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to E-Election</h1>
        <div>
          <Button type="primary" href="https://auth.cheep56.hasura-app.io/ui/login/username?redirect_url=https://ui.cheep56.hasura-app.io/home">Login</Button>  
          <Button type="primary" href="https://auth.cheep56.hasura-app.io/ui/signup/username/?redirect_url=https://goo.gl/fEGUK8">Register</Button>

        </div>
      </div>
    );
  }
}

export default App;
