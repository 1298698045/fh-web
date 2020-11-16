import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/home/Home'
import CustomerCase from './pages/customerCase/CustomerCase'
import './App.css';
import {Layout} from './layout/Layout'
import Solution from "./pages/solution/Solution";

function App() {
  return (
      <Router>
        <Switch>
          <Route path={'/Home'}>
              <Layout>
                  <Home />
              </Layout>
          </Route>
          <Route path={'/CustomerCase'}>
              <Layout>
                  <CustomerCase />
              </Layout>
          </Route>
            <Route path={'/Solution'}>
                <Layout>
                    <Solution />
                </Layout>
            </Route>
        </Switch>
      </Router>

  );
}

export default App;
