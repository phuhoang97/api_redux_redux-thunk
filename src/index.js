import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import axios from "axios";
import App from "./App";
import notesReducer from "./reducer";

// Cấu hình URL mặc định cho Axios
axios.defaults.baseURL = "http://localhost:7000";

// Tạo store với Redux Thunk middleware
const store = createStore(notesReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
