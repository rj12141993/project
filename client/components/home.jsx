import React from 'react';
import {Dropdown} from "react-bootstrap";
function Home(props){
    return(
       <div>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">mumbai</Dropdown.Item>
        <Dropdown.Item href="#/action-2">delhi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">chennai</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    );
}
export default Home;