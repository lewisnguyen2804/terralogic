import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware)
);

const MyApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
serviceWorker.unregister();
