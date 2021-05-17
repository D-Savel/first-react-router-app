import React from "react";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Topics from './components/Topics'
import "bootstrap/dist/css/bootstrap.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li><Link class="nav-link" to="/">Home</Link></li>
                <li><Link class="nav-link" to="/about">About</Link></li>
                <li><Link class="nav-link" to="/topics">Topics</Link></li>
                <li><Link class="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}
