import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import store from './store';
import Toaster from './components/Toaster';

const App = () => (
<Provider store={store}>
	<Router>
		<Fragment>
      <Toaster />
			<Switch>
				<Route path="/auth" component={Auth} />
				<PrivateRoute exact path="/" component={Dashboard} />
			</Switch>
		</Fragment>
	</Router>
</Provider>
);

export default App;
