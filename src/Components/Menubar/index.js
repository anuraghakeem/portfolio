import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Images from "../../Images";

import "./styles.css";

function Menubar(props) {
  const {
    onboard,
    wallet,
    sendInternalTransaction,
    readyToTransact,
    sendHash,
    sendTransaction,
    notify,
    address,
    toAddress,
    setToAddress,
  } = props;
  const [navbarState, changeNavbarState] = useState(false);
  const { MenubarLogo } = Images;

  const chooseNavbar = () => {
    if (window.scrollY < 200) {
      changeNavbarState(false);
    } else {
      changeNavbarState(true);
    }
  };

  window.onscroll = function () {
    chooseNavbar();
  };

  useEffect(() => {}, [navbarState]);
  return (
    <section className="Menubar-container">
      <Navbar
        className={`navbar-main show-navbar `}
        expand="xl"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={MenubarLogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#Skills-container" className="menubar-link">
                Skills
              </Nav.Link>
              <Nav.Link href="#CaseStudy-container" className="menubar-link">
                Case Study
              </Nav.Link>
              <Nav.Link href="#Projects-container" className="menubar-link">
                Projects
              </Nav.Link>
              <Nav.Link href="#Resume-container" className="menubar-link">
                Resume
              </Nav.Link>
              <Nav.Link href="#Clients-container" className="menubar-link">
                Clients
              </Nav.Link>
              {/* <Nav.Link href="#faq" className="menubar-link">
                Pricing
              </Nav.Link> */}
              <Nav.Link href="#Contact-container" className="menubar-link">
                Contact
              </Nav.Link>
              {/* <Nav.Link
                href="javascript:void(0)"
                className="connect-wallet-button menubar-link"
                onClick={() => {
                  onboard.walletSelect().then(onboard.walletCheck);
                }}
              >
                Connect Wallet
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {navbarState ? (
        <Navbar
          className="navbar-main show-navbar background-dark"
          expand="xl"
          fixed="top"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand href="#">
              <img src={MenubarLogo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#Skills-container" className="menubar-link">
                  Skills
                </Nav.Link>
                <Nav.Link href="#Projects-container" className="menubar-link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#Resume-container" className="menubar-link">
                  Resume
                </Nav.Link>
                <Nav.Link href="#Clients-container" className="menubar-link">
                  Clients
                </Nav.Link>
                {/* <Nav.Link href="#faq" className="menubar-link">
                  Pricing
                </Nav.Link> */}
                <Nav.Link href="#Contact-container" className="menubar-link">
                  Contact
                </Nav.Link>
                {/* <Nav.Link
                  href="javascript:void(0)"
                  className="connect-wallet-button menubar-link"
                  onClick={() => {
                    onboard.walletSelect().then(onboard.walletCheck);
                  }}
                >
                  Connect Wallet
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : null}
    </section>
  );
}

export default Menubar;
