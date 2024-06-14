import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import CreateDiscussion from "./components/CreateDiscussion";
import DiscussionList from "./components/DiscussionList";

function App() {
  const token = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);

  const PrivateRoutes = () => (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/create-discussion" element={<CreateDiscussion />} />
        <Route path="/discussions" element={<DiscussionList />} />
      </Routes>
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/*"
            element={
              isAuthenticated ? <PrivateRoutes /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
