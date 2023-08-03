import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
          <Container>
            <Navbar.Brand
              className="fs-3 fw-bold mx-lg-0 mx-auto"
              onClick={() => navigate("/")}
            >
              Coding
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {navLinks.map((link) => {
                  return (
                    <div className="nav-link" key={link.id}>
                      <NavLink
                        to={link.path}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        end
                      >
                        {link.text}
                      </NavLink>
                    </div>
                  );
                })}
              </Nav>
              <div className="text-center">
                <button className="btn btn-danger rounded-1">
                  Join with Us
                </button>
                <button className=" btn btn-outline-danger rounded-1 ms-lg-2 ms-0">
                  Sign In
                </button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
