import React from 'react';
import {
  // BrowserRouter as Router,
    HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/home/Home'
// import CustomerCase from './pages/customerCase/CustomerCase'
import './App.css';
import {Layout} from './layout/Layout'
// import Solution from "./pages/solution/Solution";
// import Download from "./pages/download/Download";
// import AboutWe from "./pages/aboutWe/AboutWe";
import Register from "./pages/register/Register";
import routeList from './utils/router';
function App() {
    const arr = routeList.map((item,index)=>{
        // console.log(item,'routeList')
        const Name = item.name;
        return (
            <Route path={item.path} key={index}>
                <Layout>
                    < Name />
                </Layout>
            </Route>
        )
    })
  return (
      <Router>
        <Switch>
            {arr}
          {/*<Route path={'/Home'}>*/}
          {/*    <Layout>*/}
          {/*        <Home />*/}
          {/*    </Layout>*/}
          {/*</Route>*/}
          {/*<Route path={'/CustomerCase'}>*/}
          {/*    <Layout>*/}
          {/*        <CustomerCase />*/}
          {/*    </Layout>*/}
          {/*</Route>*/}
          {/*  <Route path={'/Solution'}>*/}
          {/*      <Layout>*/}
          {/*          <Solution />*/}
          {/*      </Layout>*/}
          {/*  </Route>*/}
          {/*  <Route path={'/Download'}>*/}
          {/*      <Layout>*/}
          {/*          <Download />*/}
          {/*      </Layout>*/}
          {/*  </Route>*/}
          {/*  <Route path={'/AboutWe'}>*/}
          {/*      <Layout>*/}
          {/*          <AboutWe />*/}
          {/*      </Layout>*/}
          {/*  </Route>*/}
          {/*  <Route path={'/'}>*/}
          {/*      <Layout>*/}
          {/*          <Home />*/}
          {/*      </Layout>*/}
          {/*  </Route>*/}
          <Route path={'/Register'}>
              <Register/>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
