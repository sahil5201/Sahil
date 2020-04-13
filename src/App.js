import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

import Head from "./components/Head";
import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Page/Dashboard";
import TodayTask from './components/Page/TodayTask';
import ImportantTask from './components/Page/ImportantTask';
import ScheduleTask from './components/Page/ScheduleTask';
import ErrorPage from './components/Page/ErrorPage';
import LoginPage from './components/Page/LoginPage';

function App() {
  const customHistory = createBrowserHistory(); 
  const link = window.location.pathname
  return (
    <Provider store={store}>
      {link!=="/login" ? 
      <div className="wrapper">
      <Sidebar activeLink={link} />
      <div className="main-panel">
        <Head />
        <div className="content">
          <div className="container-fluid">
            <BrowserRouter history={customHistory}>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/latest" component={TodayTask} />
                <Route exact path="/important" component={ImportantTask} />
                <Route exact path="/planned" component={ScheduleTask} />
                <Route component={ErrorPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
    : 
      <LoginPage/>
    }
    </Provider>
  );
}

export default App;
