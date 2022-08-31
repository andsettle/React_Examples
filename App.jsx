import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Friends from "./components/friends/Friends";
import Jobs from "./components/jobs/Jobs";
import Home from "./components/Home";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Companies from "./components/techcompanies/Companies";
import Events from "./components/events/Events";
import TestAndAjax from "./components/TestAndAjax";
import Login from "./components/user/Login";
import Regsiter from "./components/user/Register";
import Cars from "./components/codeChallenge/Cars";
import debug from "sabio-debug";

const _logger = debug.extend("App");

function App() {
  const [user] = useState({
    firstName: "Someone",
    isLoggedIn: false,
    lastName: "User",
  });
  _logger(user);
  return (
    <React.Fragment>
      <div>
        <SiteNav user={user}></SiteNav>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route
            path="/components/friends/Friends"
            element={<Friends />}
          ></Route>
          <Route path="/components/jobs/Jobs" element={<Jobs />}></Route>
          <Route
            path="/components/techcompanies/Companies"
            element={<Companies />}
          ></Route>
          <Route path="/components/events/Events" element={<Events />}></Route>
          <Route path="/TestAndAjax" element={<TestAndAjax />}></Route>
          <Route path="/components/user/Login" element={<Login />}></Route>
          <Route
            path="/components/user/Register"
            element={<Regsiter />}
          ></Route>
          <Route
            path="/components/codeChallenge/Cars"
            element={<Cars />}
          ></Route>
        </Routes>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default App;
