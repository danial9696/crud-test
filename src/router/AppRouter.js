import React from "react";
import { BrowserRouter, Switch, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";
import AddItem from "../components/AddItem";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main container">
          <Switch>
            <Route component={List} path="/" exact />
            <Route component={AddItem} path="/add" exact />
            {/* <Route component={() => <Navigate to="/" />} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
