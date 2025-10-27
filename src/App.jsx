import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import WorkshopPage from "./pages/WorkshopPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshop/:id" element={<WorkshopPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
