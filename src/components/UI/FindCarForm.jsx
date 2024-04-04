import "../../styles/find-car-form.css"

import { Form, FormGroup } from "reactstrap"

function FindCarForm() {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form-group">
          <input type="text" placeholder="From Address" required />
        </FormGroup>

        <FormGroup className="form-group">
          <input type="text" placeholder="To Address" required />
        </FormGroup>

        <FormGroup className="form-group">
          <input type="text" placeholder="Journey Date" required />
        </FormGroup>

        <FormGroup className="form-group">
          <input 
          type="time"
          className="journey-time"
          placeholder="Journey Time"
          required 
          />
        </FormGroup>

        <FormGroup className="select-group">
          <select>
            <option value="gas">Gas Car</option>
            <option value="desiel">Desiel Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form-group">
          <button className="btn find-car-btn">Find a Car</button>
        </FormGroup>
      </div>
    </Form>
  )
}

export default FindCarForm