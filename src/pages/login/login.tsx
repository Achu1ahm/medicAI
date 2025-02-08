import { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuth } from "../../context/AuthContext";
import { LoginFormValues } from "../../types";
import { mockUserDetails } from "../../services/mock/userDetails";
import img from "../../assets/mediclogo.png";
import illustration from "../../assets/5ae87bc6-7a9b-43b8-b3dc-f3f139a2baee.jpeg"
import "./style.css";



const Login: React.FC = () => {
  const [typePass, setTypePass] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (values: LoginFormValues) => {
    if (values.email === mockUserDetails.email && values.password === mockUserDetails.password) {
      login();
      navigate("/", { replace: true });
    } else {
      alert("Invalid email or password");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <div className="logo-section">
            <div className="logo">
              <img src={img} alt="logo" width={"250px"} />
            </div>
          </div>
          <div className="auth_page">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="login-form">
                  <h3 className="text-uppercase text-center mb-4">medic.ai</h3>

                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <Field
                      type="email"
                      name="email"
                      className={`form-control input-field ${touched.email && errors.email ? "input-error" : ""}`}
                      id="email"
                    />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="pass">
                      <Field
                        type={typePass ? "text" : "password"}
                        name="password"
                        className={`form-control input-field ${touched.password && errors.password ? "input-error" : ""}`}
                        id="password"

                      />
                      <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? "Hide" : "Show"}
                      </small>
                    </div>
                    <ErrorMessage name="password" component="div" className="error" />
                  </div>

                  <button type="submit" className="login-button" disabled={isSubmitting}>
                    Login
                  </button>

                  <p className="my-2">
                    You do not have an account? <Link to="/signup">Register Now</Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>

        </div>
        <div className="illustration" >
          <img src={illustration} width="80%" alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
