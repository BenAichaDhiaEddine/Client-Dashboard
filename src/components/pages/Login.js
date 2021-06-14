import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  loginUser,
  loginSuccess,
  logoutUser,
  logoutUserSuccess,
  apiError,
} from "../../store/actions";
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

const Login = () => {
  var inputRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading, UserLoggedIn } = useSelector(({ Login }) => Login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (payload) => {
    dispatch(loginUser({ payload, history }));
    console.log("payload", payload);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

  }, []);
  useEffect(() => {
console.log("errors" , errors)
  }, [errors]);

  return (
    <>
      <DemoNavbar />
      <main ref={inputRef}>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="pt-lg-7">
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Se Connecter </small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                          />
                        </InputGroup>
                        {errors.email?.type === "required" && (
                          <p style={{ color: "#5e72e4" }}>
                            {" "}
                            Le email est requis{" "}
                          </p>
                        )}{" "}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            {...register("password", {
                              required: true,
                              minLength: 6,
                            })}
                          />
                        </InputGroup>
                        {errors.password?.type === "required" && (
                          <p style={{ color: "#5e72e4 ", marginTop: "1.2em" }}>
                            {" "}
                            Le mot de passe est requis{" "}
                          </p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p style={{ color: "#5e72e4", marginTop: "1.2em" }}>
                            {" "}
                            le mot de passe ne doit pas étre inferieur à 6
                            caracteres{" "}
                          </p>
                        )}
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Connexion
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default Login;
