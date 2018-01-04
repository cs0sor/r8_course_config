import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../components';
import configureStore from "../store/configure-store";
import { Provider } from "react-redux";

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>, div);
});
