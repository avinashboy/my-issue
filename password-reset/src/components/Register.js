import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Nav, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { TextField } from "./common/TextField";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Short } from "../context";
import { useNavigate } from "react-router-dom";

const initial = {
  email: "",
  username: "",
};

function Register() {
  const [register, setRegister] = useState(initial);
  
  const navigate = useNavigate();
  const { appURL } = useContext(Short);


  const registerup = ()=>{
    console.log('register:', register)
  }

  useEffect(() => {
    const { email, username } = register;
    if (email && username) return registerup();
  }, [register]);

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    username: Yup.string().required("user name is required"),
  });
  return (
    <div className="container mt-5 py-4">
      <ToastContainer />
      <Formik
        initialValues={initial}
        validationSchema={validate}
        onSubmit={(values) => {
          setRegister({
        ...register,
        username: values.username,
        email: values.email,
      });
        }}
      >
        {(formik) => (
          <div>
            <h1 className="">Register</h1>
            <Form>
              <TextField label="User Name" name="username" type="text" />
              <TextField label="Email" name="email" type="text" />
              <Row className="mt-5">
            <Col md={12} className="d-flex justify-content-between">
              <Button variant="primary" type="submit">Submit</Button>
              <Nav.Link href="/login">Login</Nav.Link>
            </Col>
          </Row>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Register;
