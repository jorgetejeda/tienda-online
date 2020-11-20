import Link from "next/link";
import { withRouter } from "next/router";
import { Nav } from "react-bootstrap";

const MenuUiElement = (props) => (
  <React.Fragment>
    {props.menuItem.map((menu, index) => (
      <Link href={menu.path} passHref key={index}>
        <Nav.Link
          className={`mr-3 ml-3 ${
            props.router.pathname === menu.path ? "active-link" : ""
          }`}
        >
          {menu.name}
        </Nav.Link>
      </Link>
    ))}
  </React.Fragment>
);

export default withRouter(MenuUiElement);
