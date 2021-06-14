import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FaMale, FaFemale } from "react-icons/fa";
import { IconContext } from "react-icons";

import profile from "../../assets/css/profile.css";
// reactstrap components

import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  CardBody,
  Input,
  Card,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import {
  logoutUser,
  getProfile,
  EditProfile,
  profileModifierFalse,
  deleteProfile,
  deleteProfileSuccess,
} from "../../store/actions";

const Profile = () => {
  const path = "http://localhost:3009/v1/";
  const history = useHistory();
  const dispatch = useDispatch();
  var inputRef = useRef(null);
  const { loading, profileDetailes, profiledModified } = useSelector(
    ({ Profile }) => Profile
  );

  const [lastName, setlastName] = useState(profileDetailes.lastName);
  const [firstName, setfirstName] = useState(profileDetailes.firstName);
  const [email, setemail] = useState(profileDetailes.email);
  const [gender, setgender] = useState(profileDetailes.gender);
  const [age, setage] = useState(profileDetailes.age);
  const [phone, setphone] = useState(profileDetailes.phone);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [image, setImage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
      console.log("age" , age );
      console.log("file" , image );
      console.log("phone" , phone );
    const id = profileDetailes?._id;
    const formData = new FormData()
    formData.append("lastName" , lastName );
    formData.append("firstName" , firstName );
    formData.append("email" , email );
    formData.append("gender" , gender );
    formData.append("age" , age );
    formData.append("phone" , phone );
    formData.append("file" , image );
    dispatch(EditProfile({ formData, id }));
  };

  const toggle = () => {
    setModal(!modal);
  };
  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    setlastName(profileDetailes.lastName);
    setfirstName(profileDetailes.firstName);
    setemail(profileDetailes.email);
    setgender(profileDetailes.gender);
    setage(profileDetailes.age);
    setphone(profileDetailes.phone);
    setImage(profileDetailes.file)
    let newPath = path.concat(profileDetailes.file)
    console.log("object" , newPath)
  }, [profileDetailes]);

  useEffect(() => {
    if (profiledModified) {
      toggle();
      dispatch(profileModifierFalse());
    }
  }, [profiledModified]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    dispatch(getProfile());
  }, []);

  const logOut = () => {
    dispatch(logoutUser(history));
  };

  const deleteProfileFunction = () => {
    const id = profileDetailes?._id;
    dispatch(deleteProfile({ id, history }));
  };

  return (
    <>
      <DemoNavbar />
      <main className="profile-page" ref={inputRef}>
        <section
          className="section-profile-cover section-shaped"
          style={{ marginTop: "-10em" }}
        >
          {/* Circles background */}
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          {/* SVG separator */}
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
        </section>
        <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={profileDetailes.file ? path.concat(profileDetailes.file) : "https://i.ibb.co/p2Tq5hQ/new-user-1.jpg"}
                        />
                      </a>
                    </div>
                  </Col>
                  <Col
                    className="order-lg-3 text-lg-right align-self-lg-center"
                    lg="4"
                  >
                    <div className="card-profile-actions py-4 mt-lg-0">
                      <Button
                        className="mr-4"
                        color="info"
                        onClick={toggle}
                        size="sm"
                      >
                        Editer profil
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="/"
                        onClick={logOut}
                        size="sm"
                      >
                        Déconnecter
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <h3 style={{ marginTop: "2.5em" }}>
                    <span style={{ fontSize: " 0.8em", fontWeight: "bold" }}>
                      {" "}
                      {firstName} {lastName}{" "}
                    </span>
                  </h3>
                  <div className="h6 mt-4">
                    <h4 className="font-weight-light">
                      <span style={{ fontSize: " 0.8em", fontWeight: "bold" }}>
                        {" "}
                        Genre :{" "}
                      </span>
                      {gender === "homme" ? (
                        <IconContext.Provider
                          value={{
                            size: "1.5em",
                          }}
                        >
                          <FaMale />
                        </IconContext.Provider>
                      ) : gender==="femme" ? (
                        <IconContext.Provider
                          value={{
                            size: "1.5em",
                          }}
                        >
                          <FaFemale />
                        </IconContext.Provider>
                      ): ""}{" "}
                    </h4>
                  </div>
                  <div className="h6 mt-4">
                    <h4 className="font-weight-light">
                      {" "}
                      <span style={{ fontSize: " 0.8em", fontWeight: "bold" }}>
                        {" "}
                        Email :{" "}
                      </span>{" "}
                      {email}
                    </h4>
                  </div>
                  <div className="h6 mt-4">
                    <h4 className="font-weight-light">
                      <span style={{ fontSize: " 0.8em", fontWeight: "bold" }}>
                        Age :
                      </span>
                      { age }
                    </h4>
                  </div>
                  <div className="h6 mt-4">
                    <h4 className="font-weight-light">
                      <span style={{ fontSize: " 0.8em", fontWeight: "bold" }}>
                        {" "}
                        Numéro de téléphone :{" "}
                      </span>
                      {phone}
                    </h4>
                  </div>
                </div>
                <div className="mt-5 py-5 border-top text-center">
                  <Row>
                    <Col md="4"></Col>
                    <Col md="4"></Col>
                    <Col md="4">
                      <Button
                        block
                        className="mb-3"
                        color="danger"
                        type="button"
                        onClick={toggleDelete}
                      >
                        Supprimer ce compte
                      </Button>
                      <Modal
                        className="modal-dialog-centered modal-danger"
                        contentClassName="bg-gradient-danger"
                        isOpen={modalDelete}
                        toggle={toggleDelete}
                      >
                        <div className="modal-header">
                          <h6
                            className="modal-title"
                            id="modal-title-notification"
                          >
                            fait attention !
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick = {toggleDelete}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="py-3 text-center">
                            <i className="ni ni-bell-55 ni-3x" />
                            <h4 className="heading mt-4">
                              Vous devriez lire ceci!
                            </h4>
                            <p>
                              est ce que vous etes sur de vouloir supprimer
                              votre compte ?
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <Button
                            className="btn-white"
                            color="default"
                            type="button"
                            onClick={deleteProfileFunction}
                          >
                            Oui
                          </Button>
                          <Button
                            className="text-white ml-auto"
                            color="link"
                            data-dismiss="modal"
                            type="button"
                            onClick={toggleDelete}
                          >
                            Annuler
                          </Button>
                        </div>
                      </Modal>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />

      <Modal isOpen={modal} toggle={toggle} className={profile}>
        <ModalHeader toggle={toggle}>Editer vos informations</ModalHeader>
        <ModalBody>
          <CardBody className="px-lg-5 py-lg-5">
            <Form id="modalForm" onSubmit={(e) => onSubmit(e)}>
              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                  for="exampleEmail"
                >
                  Image:
                </Label>
                <InputGroup
                  className="input-group-alternative mb-3"
                  style={{ marginLeft: " 1.8em",  display : "flex" , flexWrap : "nowrap" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                  style = {{ marginTop : "0.3em"}}
                    type="file"
                    name="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                  for="exampleEmail"
                >
                  Nom:
                </Label>
                <InputGroup
                  className="input-group-alternative mb-3"
                  style={{ marginLeft: " 2.5em" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                >
                  Prenom:
                </Label>
                <InputGroup
                  className="input-group-alternative mb-3"
                  style={{ marginLeft: " 1em" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                  for="exampleEmail"
                >
                  Email:{" "}
                </Label>
                <InputGroup
                  className="input-group-alternative mb-3"
                  style={{ marginLeft: " 2em" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ display: "flex " }}>
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                    marginRight: "1.2em",
                  }}
                >
                  Genre:
                </Label>
                <div style={{ marginLeft: "0.8em" }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        value="homme"
                        checked={gender === "homme"}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      Homme
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        value="femme"
                        checked={gender === "femme"}
                        onChange={(e) => setgender(e.target.value)}
                      />
                      Femme
                    </Label>
                  </FormGroup>
                </div>
              </FormGroup>
              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                >
                  Age:
                </Label>
                <InputGroup
                  className="input-group-alternative"
                  style={{ marginLeft: " 2.8em" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={age}
                    onChange={(e) => setage(e.target.value)}
                    type="number"
                    min ="18" max =" 100"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup
                style={{ display: "flex ", justifyContent: "space-between" }}
              >
                <Label
                  style={{
                    marginTop: "0.5em ",
                    fontSize: "1em",
                    fontFamily: "Open Sans",
                    color: "#172b4d",
                    fontWeight: "bold",
                  }}
                >
                  Numero:
                </Label>
                <InputGroup
                  className="input-group-alternative"
                  style={{ marginLeft: " 0.5em" }}
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="number"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  max =" 99999999"
                  />
                </InputGroup>
              </FormGroup>
              <ModalFooter
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button type="submit" color="primary">
                  Soumettre
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Annuler
                </Button>
              </ModalFooter>
            </Form>
          </CardBody>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Profile;
