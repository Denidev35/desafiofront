import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
import NewEdit from "../pages/NewEdit";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/detail" component={Detail} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/edit" component={NewEdit} isPrivate />
    </Switch>
  );
}
