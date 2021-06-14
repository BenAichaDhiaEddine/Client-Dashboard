import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { BanquesCss } from "assets/css/banques.css";
import { useDispatch, useSelector } from "react-redux";
import { getBanques, getBanquesSuccess } from "../../store/banques/actions";
import SectionSeven from "components/pages/landingPage/SectionSeven.js";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import PrintIcon from "@material-ui/icons/Print";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Banques = () => {
  const path = "http://localhost:3009/v1/";
  const history = useHistory();
  const dispatch = useDispatch();
  const [theIndex, setTheIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { loading, banquesDetails } = useSelector(({ Banques }) => Banques);
  var inputRef = useRef(null);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    dispatch(getBanques());
  }, []);
  const onSubmit = (payload) => {
    const newPayload = { payload, history };
  };

  useEffect(() => {
    console.log("theIndex", theIndex);
  }, [theIndex]);

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

          <Container>
            <div className="text-center">
              <h2
                className="display-3"
                style={{
                  color: "#fff",
                  marginTop: "1.5em",
                  marginBottom: "1.5em",
                  fontFamily: "inherit",
                }}
              >
                Les banques disponible dans notre plateforme{" "}
              </h2>
            </div>

            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  {banquesDetails.data ? (
                    banquesDetails.data?.map((one, index) => {
                      return (
                        <Col lg="4" md="4" sm="6" xs="12" key={index}>
                          <Card className="card-lift--hover shadow border-0 m-2">
                            <CardBody
                              className="py-5"
                              onClick={() => {
                                setTheIndex(parseInt(index));
                                toggleModal();
                              }}
                            >
                              <Row>
                                <Col className="  rounded-circle col-md-2 mr-2">
                                  <img
                                    src={path.concat(one.logo)}
                                    class="rounded-circle"
                                    style={{
                                      height: "50px",
                                      width: "50px",
                                      marginTop: "-12px",
                                    }}
                                  ></img>
                                </Col>
                                <Col className="mr-1">
                                  <h6 className="text-primary text-left text-uppercase">
                                    <b>{one.name}</b>
                                  </h6>
                                  <MailOutlineIcon style={{ fontSize: "17" }} />
                                  <span style={{ fontSize: "13px" }}>
                                    {" "}
                                    {one.email}
                                  </span>
                                  <br></br>
                                  <PhoneInTalkIcon style={{ fontSize: "17" }} />
                                  <span style={{ fontSize: "13px" }}>
                                    {" "}
                                    {one.phone}
                                  </span>
                                </Col>
                              </Row>
                              <hr />
                              <p className="description mt-3">
                                100% des intérêts sont reversés aux
                                investisseurs professionnels (particuliers et
                                personnes morales : entreprises, fondations,
                                etc.)
                              </p>
                            </CardBody>
                          </Card>
                        </Col>
                      );
                    })
                  ) : (
                    <h3> Il n' ya pas de banques Actuellement </h3>
                  )}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SectionSeven />
      <SimpleFooter />

      {banquesDetails.data && (
        <Modal
          className="modal-dialog-centered "
          isOpen={modal}
          toggle={toggleModal}
          style={{ width: "120%", wordBreak: "break-word" }}
        >
          {" "}
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModal}
          >
            <span aria-hidden={true}>X</span>
          </button>
          <Row className="p-4">
            <Col className="col-md-3">
              <img
                src={path.concat(banquesDetails?.data[theIndex]?.logo)}
                class="rounded-circle"
                style={{ height: "150px", width: "150px", marginTop: "-12px" }}
              ></img>
            </Col>
            <Col className="col-md-7" style={{ marginLeft: "40px" }}>
              <h6
                style={{ color: "#5603ad", fontSize: "1.3em" }}
                id="modal-title-default"
                className="text-primary text-left text-uppercase"
              >
                <b>{banquesDetails?.data[theIndex]?.name}</b>
              </h6>
              <MailOutlineIcon style={{ fontSize: "16" }} />
              <span style={{ fontSize: "12px" }}>
                {" "}
                {banquesDetails?.data[theIndex]?.email}
              </span>
              <br></br>
              <PhoneInTalkIcon style={{ fontSize: "16" }} />
              <span style={{ fontSize: "12px" }}>
                {" "}
                {banquesDetails?.data[theIndex]?.phone}
              </span>
              <br></br>
              <PrintIcon style={{ fontSize: "16" }} />
              <span style={{ fontSize: "12px" }}>
                {" "}
                {banquesDetails?.data[theIndex]?.fax}
              </span>
              <br></br>
              <MarkunreadMailboxIcon style={{ fontSize: "16" }} />
              <span style={{ fontSize: "12px" }}>
                {" "}
                {banquesDetails?.data[theIndex]?.codePostal}
              </span>
              <br></br>
              <MarkunreadMailboxIcon style={{ fontSize: "16" }} />
              <span style={{ fontSize: "12px" }}>
                {" "}
                {banquesDetails?.data[theIndex]?.city}-
                {banquesDetails?.data[theIndex]?.street}
              </span>
            </Col>
          </Row>
          <Row className="p-4">
            <Col className="col-md-6" style={{ fontSize: "14px" }}>
              {banquesDetails?.data[theIndex]?.description}
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </Col>
            <Col className="col-md-6 bg-dark">
              {/* {banquesDetails?.data[theIndex]?.geography}  */}
            </Col>
          </Row>
          <div className="modal-footer">
            <Button
              className="ml-auto primary"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={toggleModal}
            >
              Fermer
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Banques;
