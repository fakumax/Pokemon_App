import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Form from "./components/Form/Form";
import Detail from './components/Detail/Detail';
import "./App.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create" element={<Form />} />
      <Route path="/pokemon/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;