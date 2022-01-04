import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(`email: ${email} password; ${password}`);
    
    if (!email || !password) {
      return alert("Please fill all the fields");
    }
  }
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image-signin"></div>
          <div className="col-md-6 bg-light">
            <div className="landing d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="formBox col-lg-10 col-xl-7 mx-auto">
                    <h3 className=" text-center">Log In To Your XYZ Account</h3>
                    <hr />
                    <form onSubmit={handleOnSubmit}>
                      <div className="loginForm mb-3 pt-4">
                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control
                            onChange={handleEmailChange}
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                          />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingPassword"
                          label="Password"
                        >
                          <Form.Control
                            onChange={handlePassword}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                          />
                        </FloatingLabel>
                      </div>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`Remember Password`}
                          />
                        </div>
                      ))}
                      <div className="gap-2 mt-4 text-center">
                        <button
                          // onClick={handleOnChange}
                          type="submit"
                          className="btn btn-primary px-5 text-uppercase mb-4 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
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











































// import { FloatingLabel, Form } from "react-bootstrap";
// import React, { Component } from 'react'
// import "./login.css";


// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     const { name, value  } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

  
//   handleOnSubmit(event){
//     event.preventDefault();

//     if(!this.state.email || !this.state.password){
//       return alert("Please fill all the fields")
//     }
//   }

//   render() {
//     return (
// <div className="maincontainer">
//       <div className="container-fluid">
//         <div className="row no-gutter">
//           <div className="col-md-6 d-none d-md-flex bg-image-signin"></div>
//           <div className="col-md-6 bg-light">
//             <div className="landing d-flex align-items-center py-5">
//               <div className="container">
//                 <div className="row">
//                   <div className="formBox col-lg-10 col-xl-7 mx-auto">
//                     <h3 className=" text-center">Log In To Your XYZ Account</h3>
//                     <hr />
//                     <form>
//                       <div className="loginForm mb-3 pt-4">
//                         <FloatingLabel
//                           controlId="floatingInput"
//                           label="Email address"
//                           className="mb-3"
//                         >
//                           <Form.Control
//                             onChange={this.handleChange}
//                             value={this.state.email}
//                             name="email"
//                             type="email"
//                             placeholder="name@example.com"
//                             required
//                           />
//                         </FloatingLabel>
//                         <FloatingLabel
//                           controlId="floatingPassword"
//                           label="Password"
//                         >
//                           <Form.Control
//                             onChange={this.handleChange}
//                             value={this.state.password}
//                             name="password"
//                             type="password"
//                             placeholder="Password"
//                             required
//                           />
//                         </FloatingLabel>
//                       </div>
//                       {["checkbox"].map((type) => (
//                         <div key={`default-${type}`} className="mb-3">
//                           <Form.Check
//                             type={type}
//                             id={`default-${type}`}
//                             label={`Remember Password`}
//                           />
//                         </div>
//                       ))}
//                       <div className="gap-2 mt-4 text-center">
//                         <button
//                           // onClick={handleOnChange}
//                           type="submit"
//                           className="btn btn-primary px-5 text-uppercase mb-4 rounded-pill shadow-sm"
//                         >
//                           Sign in
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }
