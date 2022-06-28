import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from '../../store';
import { BrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard";
import SearchResults from "../SearchResults";

const store = configureStore();

function Index() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/searched-results" element={<SearchResults />} />
            </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default Index;
