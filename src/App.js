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
import Download from "./pages/download/Download";
import AboutWe from "./pages/aboutWe/AboutWe";

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
            <Route path={'/Download'}>
                <Layout>
                    <Download />
                </Layout>
            </Route>
            <Route path={'/AboutWe'}>
                <Layout>
                    <AboutWe />
                </Layout>
            </Route>
        </Switch>
      </Router>

  );
}

export default App;
