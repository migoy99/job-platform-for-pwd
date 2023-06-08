import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";

function CategoryDropdown() {
  return (
    <Dropdown style={{paddingTop: '5px'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '150px', backgroundColor: '#009087', color: 'white'}}>
        User's Name
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width: '100%', borderRadius: '8px'}}>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>  
        <Link to='/' style={{textDecoration: 'none'}}><Dropdown.Item href="#/action-2">Log out</Dropdown.Item></Link>
        {/* <Link to="/"><button style={{borderRadius: '8px',width: '100%', height: '50px', backgroundColor: '#009087', color: 'white'}}>Log out</button></Link>
        <Link to="/"><button style={{borderRadius: '8px',width: '100%', height: '50px', backgroundColor: '#009087', color: 'white'}}>Log out</button></Link> */}
        {/* <Link to="/"><button style={{borderRadius: '8px',width: '100%', height: '50px', backgroundColor: '#009087', color: 'white'}}>Log out</button></Link> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryDropdown;