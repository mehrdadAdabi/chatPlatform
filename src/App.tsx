import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./utilities/styles";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Container>
        <div>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
