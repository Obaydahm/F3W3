import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header />
            <Content />
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function PageNotFound() {
    return <h2>Page not found bro!</h2>
}

function Header() {
    return (
        <nav>
            <ul className="nav">
                <li className="navItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/about">About</Link>
                </li>
                <li className="navItem">
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    );
}

function Content() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route>
                <PageNotFound />
            </Route>
        </Switch>
    );
}