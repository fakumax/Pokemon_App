import React from "react";
import { Route } from "react-router-dom";
import Base from './components/Base/Base';
import Home from './components/Home/Home';
import Form from "./components/Form/Form";
import Detail from './components/Detail/Detail';
import "./App.scss";

export function App() {
  return (
    <>
      <Route exact path="/" component={Base} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Form} />
      <Route path="/pokemon/:id" component={Detail} />
    </>
  );
}

export default App;