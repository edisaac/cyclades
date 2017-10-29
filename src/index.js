import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import godReducer from './rdx/godReducer'
import randomGodReducer from './rdx/randomGodReducer'
import cantidadReducer from './rdx/cantidadReducer'

//const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  godReducer: godReducer,
  randomGodReducer: randomGodReducer,
  cantidadReducer: cantidadReducer
});

const store = createStore(reducer);

const Root = <Provider store={store}><App /></Provider>;

ReactDOM.render(Root, document.getElementById('root'));

//registerServiceWorker();



//npm install --save redux react-redux