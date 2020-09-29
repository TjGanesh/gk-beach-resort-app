import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SinglePage from "./pages/SinglePage";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

/* 
    https://www.youtube.com/watch?v=LXJOvkVYQqA&t=28s
    https://www.youtube.com/c/Freecodecamp/search?query=react */

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/single-room/:slug" component={SinglePage} />
        <Route component={NoPage} />
      </Switch>
    </>
  );
}

export default App;
