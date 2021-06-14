import React, { useEffect, useState , useRef } from "react";
import { useForm } from "react-hook-form";
import {useHistory } from "react-router-dom";



import { useDispatch, useSelector } from "react-redux";
import { registerUser, registerUserSuccessful , registerUserFailed  } from "../../store/auth/registre/actions";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Simulation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { registrationError, message, loading } = useSelector(({ Account }) => Account);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var inputRef = useRef(null);


  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const onSubmit = (payload) =>{ 
    const newPayload = {payload,history}
    dispatch(registerUser({payload,history}))
  };

  return (
    <>
      <DemoNavbar />
      <main ref={inputRef}>
        <section className="section section-shaped section-lg">
          <div  className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <Container className="pt-lg-7">
    
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Simulation;
