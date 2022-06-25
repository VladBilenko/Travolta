import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from '../../store';
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";

const store = configureStore();

function Index() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default Index;
