import React from "react";
import ReactDOM from "react-dom";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

function counterReducer(state = 0, action) {
   if (action.type === "INCREMENT"){
      return state + 1;
   }
   if (action.type === "DECREMENT"){
      return state - 1;
   }
  return state;
}

function rootReducer(state, action) {
   counterReducer(state, action);
   counterReducer2(state, action);
   counterReducer3(state, action);
}
let store = createStore(rootReducer);
 
store.subscribe(() => console.log("хранилище изменилось", store.getState()));

console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
