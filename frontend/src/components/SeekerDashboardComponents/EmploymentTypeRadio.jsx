import Form from 'react-bootstrap/Form';

function EmploymentTypeRadio() {
  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Freelance"
        style={{background: ''}}
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Part Time"
      />
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Full Time"
      />
    </Form>
  );
}

export default EmploymentTypeRadio;