import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
// import SignUp from './SignUp';
// import Login from './Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/home" component={Home} exact={true} />



            </Switch>
        </div>

    </BrowserRouter>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();