import React from "react";
import { BrowserRouter, Switch, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={List} path="/" exact />
            {/* <Route component={() => <Navigate to="/" />} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
