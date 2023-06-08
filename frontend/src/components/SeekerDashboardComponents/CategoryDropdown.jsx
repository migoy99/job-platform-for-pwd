import Dropdown from 'react-bootstrap/Dropdown';

function CategoryDropdown() {
  return (
    <Dropdown style={{backgroundColor: 'white'}}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width: '100%', backgroundColor: '#009087'}}>
        Select Category
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width: '100%'}}>
        <Dropdown.Item href="#/action-1">Job Category 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Job Category 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Job Category 3</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Job Category 4</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Job Category 5</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Job Category 6</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CategoryDropdown;