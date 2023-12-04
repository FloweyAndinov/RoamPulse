import classNames from 'classnames';
import styles from './navbar.module.scss';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import logo from "../../assets/logo.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */


export const NavbarComp = () => {
    return (
 <div className={styles.root}>
      <Navbar bg="light" expand="md" className="px-4">
      <Link to="/"><Navbar.Brand>
      <img src={logo} alt="Logo" style={{width : '3em'}}/>
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Link to="/" style={{ textDecoration: 'none' }}><Nav className={classNames("px-3", styles.navbtn)}>Home</Nav></Link>
          <Link to="/features" style={{ textDecoration: 'none' }}><Nav className={classNames("px-3", styles.navbtn)}>Features</Nav></Link>
          <Link to="/trending" style={{ textDecoration: 'none' }}><Nav className={classNames("px-3", styles.navbtn)}>Trending</Nav></Link>
          <Link to="/pricing" style={{ textDecoration: 'none' }}><Nav className={classNames("px-3", styles.navbtn)}>Pricing</Nav></Link>
          <Link to="/contacts" style={{ textDecoration: 'none' }}><Nav className={classNames("px-3", styles.navbtn)}>Contact Us</Nav></Link>
          {/* Add more Nav.Link components as needed */}
        </Nav>
        <Button variant="danger">Sign Up</Button>
      </Navbar.Collapse>
    </Navbar>
 </div>
    )
};
