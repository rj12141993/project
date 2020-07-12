import React from 'react';
import { Nav, Navbar} from 'react-bootstrap'
function Header(props) {

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home.jsx">TODO</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="d:/project/client/components/home.jsx">Home</Nav.Link>
      <Nav.Link href="/home.jsx">tasks</Nav.Link>
      <Nav.Link href="/user.jsx">user</Nav.Link>
    </Nav>
    </Navbar>

   );

}

export default Header;
