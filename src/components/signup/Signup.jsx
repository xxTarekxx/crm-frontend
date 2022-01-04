import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import unitedstates from "./abreviations";
import "./signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addressdetails, setAddressdetails] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [zipcode, setZipcode] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handleAddressdetails(e) {
    setAddressdetails(e.target.value);
  }
  function handleCompany(e) {
    setCompany(e.target.value);
  }
  function handleCity(e) {
    setCity(e.target.value);
  }
  function handleStateName(e) {
    setStateName(e.target.value);
  }

  function handleZipcode(e) {
    setZipcode(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email} password; ${password}`);

    if (
      !email ||
      !password ||
      !address ||
      !addressdetails ||
      !company ||
      !city ||
      !stateName ||
      !zipcode ||
      !phone
    ) {
      return alert("Please fill all the fields");
    }
  }

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
                    <h3 className="mt-3 text-center">Join Us for Better Business</h3>
                    <hr />
                    <Form className="py-4" onSubmit={handleOnSubmit}>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            onChange={handleEmailChange}
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            onChange={handlePassword}
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
                          onChange={handlePhone}
                          name="phone"
                          type="text"
                          placeholder="XXX-XXX-XXXX"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          onChange={handleAddress}
                          name="address"
                          type="text"
                          placeholder="1234 Main St"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control
                          onChange={handleAddressdetails}
                          name="addressdetails"
                          type="text"
                          placeholder="Apartment, studio, or floor"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="companyName">
                        <Form.Label>Company Legal Name</Form.Label>
                        <Form.Control
                          onChange={handleCompany}
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
                            onChange={handleCity}
                            name="city"
                            type="text"
                            placeholder="Dallas..."
                            required
                          />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>State</Form.Label>
                          <Form.Select
                            onChange={handleStateName}
                            name="stateName"
                            type="text"
                            required
                          >
                            <option value={null}>Choose....</option>
                            {unitedstates.map((state) => (
                              <option key={state} value={state}>
                                {state.name}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control
                            onChange={handleZipcode}
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
