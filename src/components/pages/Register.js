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

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { registrationError, message, loading } = useSelector(({ Account }) => Account);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var inputRef = useRef(null);

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

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
                  <CardHeader
                    className="bg-white pb-5"
                    style={{ marginBottom: "-4em" }}
                  >
                    <div className="text-muted text-center mb-3">
                      <small style={{ fontSize: "100%" }}>
                        Créer Un Compte{" "}
                      </small>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={handleSubmit(onSubmit)}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nom"
                            type="text"
                            {...register("lastName", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                        </InputGroup>
                        
                        {errors.lastName?.type === "required" && (
                          <p style ={{color : "#5e72e4"}} > Le nom est requis </p>
                        )}
                        {errors.lastName?.type === "maxLength" && (
                          <p style ={{color : "#5e72e4"}} >
                            {" "}
                            le nom ne doit dépasser 20 caracteres{" "}
                          </p>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Prenom"
                            type="text"
                            {...register("firstName", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                        </InputGroup>
                        {errors.firstName?.type === "required" && (
                          <p  style ={{color : "#5e72e4"}}>
                            {" "}
                            Le prenom est requis{" "}
                          </p>
                        )}
                        {errors.firstName?.type === "maxLength" && (
                          <p style ={{color : "#5e72e4"}} >
                            {" "}
                            le prenom ne doit dépasser 20 caracteres{" "}
                          </p>
                        )}
                      </FormGroup>
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
                          <p  style ={{color : "#5e72e4"}} >
                            {" "}
                            Le email est requis{" "}
                          </p>
                        )}
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
                          <p  style ={{color : "#5e72e4 " , marginTop : "1.2em"}} >
                            {" "}
                            Le mot de passe est requis{" "}
                          </p>
                        )}
                        {errors.password?.type === "minLength" && (
                          <p style ={{color : "#5e72e4" , marginTop : "1.2em" }} >
                            {" "}
                            le mot de passe  ne doit pas étre inferieur à 8 caracteres{" "}
                          </p>
                        )}
                      </FormGroup>
                      <div className="text-center">
                        <Button className="mt-4" color="primary" type="submit">
                          Create account
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

export default Register;
