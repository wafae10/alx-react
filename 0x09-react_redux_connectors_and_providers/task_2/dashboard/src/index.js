import React from "react";
import ReactDOM from "react-dom";
import { creatStore, Provider, applyMiddleware} from "react-redux";
import thunk from 'redux-thunk'
import App from "./App/App";
import { uiReducer } from "./reducers/uiReducer";

const store = creatStore(uiReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);





