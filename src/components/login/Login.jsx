import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./login.css";
import { propTypes } from "react-bootstrap/esm/Image";

function Login({ handleOnChange, email, password }) {
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
                    <form>
                      <div className="loginForm mb-3 pt-4">
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control
                            onChange={handleOnChange}
                            value={email}
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
                            onChange={handleOnChange}
                            // value={password}
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
                          onClick={handleOnChange}
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

export default Login;

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

// export default class Login extends React.Component {
//   render() {
//     return (
//       <div className="maincontainer">
//         <div className="container-fluid">
//           <div className="row no-gutter">
//             <div className="col-md-6 d-none d-md-flex bg-image"></div>

//             <div className="col-md-6 bg-light">
//               <div className="login d-flex align-items-center py-5">
//                 <div className="container">
//                   <div className="row">
//                     <div className="formBox col-lg-10 col-xl-7 mx-auto">
//                       <h3 className=" text-center">Welcome</h3>
//                       <hr />
//                       <form>
//                         <div className="loginForm mb-3 pt-4">
//                           <FloatingLabel
//                             controlId="floatingInput"
//                             label="Email address"
//                             className="mb-3 "
//                           >
//                             <Form.Control
//                               type="email"
//                               placeholder="name@example.com"
//                             />
//                           </FloatingLabel>
//                           <FloatingLabel
//                             controlId="floatingPassword"
//                             label="Password"
//                           >
//                             <Form.Control
//                               type="password"
//                               placeholder="Password"
//                             />
//                           </FloatingLabel>
//                         </div>
//                         {["checkbox"].map((type) => (
//                           <div key={`default-${type}`} className="mb-3">
//                             <Form.Check
//                               type={type}
//                               id={`default-${type}`}
//                               label={`Remember Password`}
//                             />
//                           </div>
//                         ))}
//                         <div className="gap-2 mt-4 text-center">
//                           <button
//                             type="submit"
//                             className="btn btn-primary px-5 text-uppercase mb-4 rounded-pill shadow-sm"
//                           >
//                             Sign in
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
