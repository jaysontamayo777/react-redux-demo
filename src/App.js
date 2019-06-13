import React, { Component } from "react";
import ToDo from "./pages/ToDo/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const reduxStore = configureStore();

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <ToDo />
      </ReduxProvider>
    );
  }
}

export default App;