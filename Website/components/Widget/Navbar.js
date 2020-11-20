import { Container, Navbar, Nav } from "react-bootstrap";
import Menu from "../Ui-Element/Menu_Ui-Element";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";


const arrMenu = [
    {name:"Home", path:"/"},
    {name:"Create Product", path:"/create"},
]

const NavBarWidget = (props) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/" className="navbar-logo-menu">
        <span style={{ fontSize: "1rem" }} className="mx-2 p-2  brand-title">
          <FontAwesomeIcon icon={faStore}/> {props.logoName}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="font-weight-bold">
          <Menu menuItem={arrMenu} />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBarWidget;