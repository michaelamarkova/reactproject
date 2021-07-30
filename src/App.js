import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
