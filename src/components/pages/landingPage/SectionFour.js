import React from "react";
import classnames from "classnames";
import { BiMoney } from "react-icons/bi";
import { IconContext } from "react-icons";
import { SiFastly } from "react-icons/bi";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionFour() {
  return (
    <section
      className="section pb-0 bg-gradient-warning"
      style={{ paddingTop: "10em", paddingBottom: "5em" }}
    >
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-lg-2 ml-lg-auto" md="6">
            <div className="position-relative pl-md-5">
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("assets/img/ill/ill-2.svg")}
              />
            </div>
          </Col>
          <Col className="order-lg-1" lg="6">
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <BiMoney />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white">
                  {" "}
                  Votre credit bancaire en ligne
                </h4>
                <p className="text-white"></p>
              </div>
            </div>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="ni ni-satisfied" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-success">
                      Chercher le meilleur offre
                    </h5>
                    <p>
                      Choisir vos critére de recherches et chercher le meilleur
                      offre de credit bancaire qui conviennet avec votre projet
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow shadow-lg--hover mt-5">
              <CardBody>
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                      <i className="ni ni-active-40" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h5 className="title text-warning">
                      Demander votre crédit en ligne
                    </h5>
                    <p>
                      Souscrire un crédit en ligne est très simple , il suffit
                      de remplir sa demande puis d’obtenir une réponse de
                      principe.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
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
  );
}

export default SectionFour;
