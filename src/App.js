import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
                <li> <Link class="nav-link" to="/topics">Topics</Link></li>
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

function Home() {
  return (
    <h2 className="display-1 text-center pt-3">This is HOME Page</h2>
  )
}

function About() {
  return (
    <h2 className="display-3 text-center pt-3">This is About Page</h2>
  )
}

function Contact() {
  return (
    <h2 className="display-5 text-center pt-3">This is Contact Page</h2>
  )
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}