import "./app.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SinglePhoto from "./pages/Photo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/photo/:id' element={<SinglePhoto />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
