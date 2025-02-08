import { useState } from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers, Form, Field, ErrorMessage } from 'formik';
import { useAuth } from '../../context/AuthContext';

export interface LoginFormValues {
    email: string;
    password: string;
  }

const Login: React.FC = () => {
  const [typePass, setTypePass] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (values: any, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    console.log(values, 'values');
    login();
    navigate("/chat");
    setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .required('Required')
  });

  return (
    <div className="auth_page">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <h3 className="text-uppercase text-center mb-4">medic.ai</h3>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Field
              type="email"
              name="email"
              className={`form-control ${touched.email && errors.email ? 'input-error' : ''}`}
              id="email"
              aria-describedby="emailHelp"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="pass">
              <Field
                type={typePass ? 'text' : 'password'}
                name="password"
                className={`form-control ${touched.password && errors.password ? 'input-error' : ''}`}
                id="password"
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? 'Hide' : 'Show'}
              </small>
            </div>
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button
            type="submit"
            className="btn btn-dark w-100"
            disabled={isSubmitting}
          >
            Login
          </button>

          <p className="my-2">
            You do not have an account?{' '}
            <Link to="/signup">
              Register Now
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  </div>
  );
};

export default Login;
