import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Tasks from "./Tasks";
import Publications from "./Publications";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="margin">
      <Route exact path="/" component={Users} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/publications/:key" component={Publications} />
    </div>
  </BrowserRouter>
);

export default App;
