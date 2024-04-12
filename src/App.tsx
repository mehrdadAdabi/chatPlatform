import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./utilities/styles";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Conversation from "./pages/Conversation";
import ConversatoinChannelPage from "./pages/ConversationChannelPage";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/conversation" element={<Conversation />}>
            <Route path=":id" element={<ConversatoinChannelPage />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
