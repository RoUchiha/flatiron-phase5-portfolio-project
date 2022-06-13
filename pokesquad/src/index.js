import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./reducers/reducer.js";
import App from './App.js'
import { composeWithDevTools } from 'redux-devtools-extension'


const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunkMiddleware)));
console.log(store.getState())

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);