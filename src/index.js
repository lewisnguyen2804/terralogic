import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
 
const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunkMiddleware)),
);


const MyApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
serviceWorker.unregister();
