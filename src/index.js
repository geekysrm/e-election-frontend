import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
// import SignUp from './SignUp';
// import Login from './Login';
import GetCredentials from './GetCredentials';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/home" component={Home} />
                <Route path="/get-credentials" component={GetCredentials} />


            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(<div><AppRouter /></div>, document.getElementById('root'));
registerServiceWorker();