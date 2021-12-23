import React, { Component } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      addressdetails: "",
      company: "",
      phone: "",
      city: "",
      stateName: "",
      zipcode: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // handleOnSubmit(event){
  //   event.preventDefault();

  //   if(!email || !password){
  //     return alert("Please fill all the fields")
  //   }
  // }

  render() {
    return (
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image-signup"></div>
            <div className="col-md-6 bg-light">
              <div className="signup d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className=" formBox col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4 text-center">Registration</h3>
                      <hr />
                      <Form className="py-4" >
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              value={this.state.email}
                              name="email"
                              type="email"
                              placeholder="name@example.com"
                              required
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              value={this.state.password}
                              name="password"
                              type="password"
                              placeholder="Password"
                              required
                            />
                          </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            value={this.state.phone}
                            name="phone"
                            type="text"
                            placeholder="XXX-XXX-XXXX"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formGridAddress1"
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            value={this.state.address}
                            name="address"
                            type="text"
                            placeholder="1234 Main St"
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formGridAddress2"
                        >
                          <Form.Label>Address 2</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            value={this.state.addressdetails}
                            name="addressdetails"
                            type="text"
                            placeholder="Apartment, studio, or floor"
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="companyName">
                          <Form.Label>Company Legal Name</Form.Label>
                          <Form.Control
                            onChange={this.handleChange}
                            value={this.state.company}
                            name="company"
                            type="text"
                            placeholder="Company LLC...Company Co..."
                            required
                          />
                        </Form.Group>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              value={this.state.city}
                              name="city"
                              type="text"
                              placeholder="Dallas..."
                              required
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select
                              onChange={this.handleChange}
                              value={this.state.stateName}
                              name="stateName"
                              type="text"
                              required
                            >
                              <option value={null}>Choose....</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </Form.Select>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                              onChange={this.handleChange}
                              value={this.state.zipcode}
                              name="zipcode"
                              type="number"
                              placeholder="75056..."
                              required
                            />
                          </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                          <Form.Check
                            type="checkbox"
                            label="Agree to Terms and Agreements"
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
