import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Head from "./Head";
import Sidebar from "./Sidebar";

import Dashboard from "./Page/Dashboard";
import TodayTask from './Page/TodayTask';
import ImportantTask from './Page/ImportantTask';
import ScheduleTask from './Page/ScheduleTask';
import ErrorPage from './Page/ErrorPage';
import { useSelector } from "react-redux";

function Mainarea() {
  const customHistory = createBrowserHistory(); 
  const link = window.location.pathname
  const user = useSelector((state)=>state.User);

  console.log(user);
  return (
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
  );
}

export default Mainarea;
