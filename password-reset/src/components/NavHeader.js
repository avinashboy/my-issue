import React, { useContext, useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import { Short } from "../context";
import Analytics from "./Analytics";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";

function NavHeader() {
  const data = useContext(Short);
  console.log("authToken:", data.authToken);
  const { authToken } = data;
  const [state, setState] = useState({authToken: data.authToken})

  const clearToken = () => {
    localStorage.clear();
    setState({authToken: null})
    data.authToken = null
  };

  useEffect(()=>{
    console.log("authToken:", authToken);
    setState({authToken: authToken})
  },[authToken])
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Link
              className="nav-link"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <Navbar.Brand className="text-primary">Short URL</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" />
            {state.authToken ? (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link
                    className="nav-link"
                    to="/analytics"
                    style={{ textDecoration: "none" }}
                  >
                    Analytics
                  </Link>
                </Nav>
                <Dropdown className="px-5">
                  <Dropdown.Toggle id="dropdown-basic">Setting</Dropdown.Toggle>

                  <Dropdown.Menu>
                  
                  
                    <Dropdown.Item as={()=>(<div/>)}><Link
                    className="nav-link"
                    to="/login"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link></Dropdown.Item>

                    <Dropdown.Item onClick={clearToken}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            ) : (
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Link
                    className="nav-link"
                    to="/login"
                    style={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                  <Link
                    className="nav-link"
                    to="/register"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </Link>
                </Nav>
              </Navbar.Collapse>
            )}
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Switch>
      </Router>
    </>
  );
}

export default NavHeader;
