import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";
import AddItem from "../components/AddItem";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="main">
          <Switch>
            <Route component={List} path="/" exact />
            <Route component={AddItem} path="/add" exact />
            <Route path="*">
              <List />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
