import React, { useEffect, useState, useRef } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOffres,
  getOffresSuccess,
  getCreditType,
  getCreditTypeSuccess,
} from "../../store/actions";
import { BanquesCss } from "assets/css/banques.css";

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
  UncontrolledTooltip,
  Row,
  Col,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardDeck,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import SectionSeven from "components/pages/landingPage/SectionSeven.js";
import { useWizard } from "react-wizard-primitive";

const Offres = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const path = "http://localhost:3009/v1/";
  const history = useHistory();
  const dispatch = useDispatch();
  const [theIndex, setTheIndex] = useState(100);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    handleReset()
  };
  const { loading, offresDetails, creditTypes } = useSelector(
    ({ Offres }) => Offres
  );
  var inputRef = useRef(null);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [newOffresDetailsHook, setNewOffresDetailsHook] = useState([]);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    dispatch(getOffres());
    dispatch(getCreditType());
    setOptionSelected(creditTypesOptions[0]);
  }, []);
  var creditTypesOptions = [];
  var newOffresDetails = [];
  if (creditTypes.data) {
    for (var i = 0; i < creditTypes.data.length; i++) {
      creditTypesOptions.push({
        label: creditTypes.data[i].name,
        value: creditTypes.data[i].id,
      });
    }
  }

  useEffect(() => {
    if (optionSelected !== null) {
      if (offresDetails.data) {
        newOffresDetails = offresDetails.data.filter((one) => {
          return one.creditType._id === optionSelected.value;
        });
        setNewOffresDetailsHook(newOffresDetails);
      }
    }
  }, [optionSelected]);

  useEffect(() => {
    console.log("theIndex", theIndex);
    console.log("newOffresDetailsHook", newOffresDetailsHook);
    console.log(
      "newOffresDetailsHook[theIndex]",
      newOffresDetailsHook[theIndex]
    );
    if (newOffresDetailsHook[theIndex]) {
      //conditon name
      var arr = [];
      for (
        var i = 0;
        i < newOffresDetailsHook[theIndex]?.condition.length;
        i++
      ) {
        arr.push(newOffresDetailsHook[theIndex]?.condition[i]?.description);
      }
      setArray(arr);
      console.log("array", array);

      //condition description
      var StepArray = [];
      for (
        var i = 0;
        i < newOffresDetailsHook[theIndex]?.condition.length;
        i++
      ) {
        StepArray.push(
          newOffresDetailsHook[theIndex]?.condition[i]?.nameCondition
        );
      }
    }
    setSteps(StepArray);
    console.log("StepArray", StepArray);
  }, [theIndex]);

  useEffect(() => {
    console.log("newOffresDetailsHook", newOffresDetailsHook);
  }, [newOffresDetailsHook]);

  const onSubmit = (payload) => {
    const newPayload = { payload, history };
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
          <Container style={{ padding: "0px 0px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h2
                className="display-3"
                style={{
                  color: "#fff",
                  fontFamily: "inherit",
                  fontSize: "1.5em",
                  marginBottom: "1em",
                  marginTop: "1.5em",
                }}
              >
                Veuillez choisir le type de credit desiré :
              </h2>
              <div style={{ width: "25%" }}>
                {creditTypesOptions.length > 0 && (
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    name="color"
                    onChange={(e) => {
                      setOptionSelected(e);
                    }}
                    options={creditTypesOptions}
                  />
                )}
              </div>
            </div>
            <div className="text-center">
              <h2
                className="display-3"
                style={{
                  color: "#fff",
                  marginTop: "1em",
                  marginBottom: "1.5em",
                  fontSize: "1.5em",
                }}
              >
                Les offres disponible dans notre plateforme :
              </h2>
            </div>
            <CardDeck className={BanquesCss}>
              <Row style={{ display: "contents" }}>
                {newOffresDetailsHook.map((one, index) => {
                  return (
                    <Col xs="6" md="3" xl="3" key={index}>
                      <Link
                        onClick={(e) => {
                          setTheIndex(parseInt(index));
                          toggleModal();
                          e.preventDefault();
                        }}
                      >
                        <Card
                          className="card-lift--hover shadow border-0 card"
                          style={{ margin: "0em", marginTop: "1em", padding:"0.5em"}}
                        >
                          <CardBody
                            style={{
                              alignContent: "center !important",
                              padding: "0.2em",
                            }}
                          >
                            <div>
                              <CardTitle
                                style={{
                                  color: "#5603ad",
                                  display: "flex",
                                  justifyContent: "center",
                                  marginBottom: "0.5em",
                                  marginTop: "-0.2em",
                                  textOverflow: "ellipsis",
                                }}
                                tag="h5"
                              >
                                {one?.name}
                              </CardTitle>
                            </div>
                            <CardText
                            >
                              <span
                                style={{
                                  color: "#5603ad",
                                }}
                              >
                                Options :
                              </span>
                              <ul>
                                {one.options.map((option) => {
                                  return (
                                    <li style={{ color: "#5603ad" }}>
                                      {option.nameOption}
                                    </li>
                                  );
                                })}
                              </ul>
                            </CardText>
                          </CardBody>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </CardDeck>
          </Container>
        </section>
      </main>
      <SectionSeven />
      <SimpleFooter />

      {newOffresDetailsHook && (
        <Modal
          className="modal-dialog-centered"
          isOpen={modal}
          toggle={toggleModal}
          style={{ width: "auto", wordBreak: "break-word" }}
        >
          <div className="modal-header">
            <h6
              style={{
                color: "#5603ad",
                fontSize: "1.3em",
              }}
              id="modal-title-default"
            >
              {newOffresDetailsHook[theIndex]?.name}
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={toggleModal}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className={classes.root}>
              <h3> Les conditions de l'offre :</h3>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps &&
                  steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>
                          {" "}
                          {array[index]
                            ? array[index]
                            : "cet conditions n'est pas disponible"}
                        </Typography>
                        <div className={classes.actionsContainer}>
                          <div>
                            <Button
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              className={classes.button}
                            >
                              Arrière
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleNext}
                              style={{ backgroundColor: "#5603ad" }}
                              className={classes.button}
                            >
                              {activeStep === steps.length - 1
                                ? "Terminer"
                                : "Accepter"}
                            </Button>
                          </div>
                        </div>
                      </StepContent>
                    </Step>
                  ))}
              </Stepper>
              {steps && steps.length > 0 ? (
                activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}
                  >
                    <Typography>
                      Toutes les conditions sont lues et vous les acceptez
                      toutes
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Relire
                    </Button>
                  </Paper>
                )
              ) : (
                <Paper square elevation={0} className={classes.resetContainer}>
                  <Typography>
                    Il n' y a pas des conditions pour cet offre
                  </Typography>
                </Paper>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={toggleModal}
              style={{ backgroundColor: "#5603ad", color: "white" }}
            >
              Fermer
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Offres;
