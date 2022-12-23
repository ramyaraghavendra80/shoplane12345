import "./Login.css";
import { Formik, ErrorMessage, Field, Form} from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';

function Login() {

    const initialValues = {
        email: "",
        password: ""
    };
const submitForm = (values,props) => {
        console.log(values);
        props.resetForm();
        console.log(props);
        alert("Login is Successfull...!")
        
    };
const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Email format is invalid").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum"),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={submitForm}
        >
            {(formik) => {
                const {errors,touched} = formik;
                return (
                    <div className="logincontainer">
                        <Form className="loginform">
                            <p className="loginheading">Login</p>
                            <hr />
                            <div className="loginbody">
                                <div className="form-row">
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email"
                                    className={`inputfield ${errors.email && touched.email ?
                                        "input-error" : null}`}
                                />
                                <ErrorMessage name="email" className="errormsg" component="div" />
                            </div>

                            <div className="form-row">
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter password"
                                    className={`inputfield ${errors.password && touched.password ?
                                        "input-error" : null}`}
                                />
                                <ErrorMessage component="div" className="errormsg" name="password"/>

                            </div>
                            <div>
                                <p className="text">Don't have an account?<span ><Link to="/signup" className="signuplink">nnnnSignup here</Link></span></p>
                            </div>

                            <Button type="submit" className="loginsubmit">Loginnnnn</Button>
                            </div>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};


export default Login;