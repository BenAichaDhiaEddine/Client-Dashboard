import React from "react";
import classnames from "classnames";
import { IconContext } from "react-icons";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

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

function SectionTwo() {
  return (
    <section className="section section-lg">
      <Container>
        <Row className="row-grid align-items-center">
          <Col className="order-md-2" md="6">
            <img
              alt="..."
              className="img-fluid floating"
              src={require("assets/img/theme/bank.jpg")}
            />
          </Col>
          <Col className="order-md-1" md="6">
            <div className="pr-md-5">
              <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                <IconContext.Provider
                  value={{
                    color: "#1aae6f",
                    size: "2em",
                  }}
                >
                  <FaMoneyBillAlt />
                </IconContext.Provider>{" "}
              </div>
              <h3>Réaliser sa demande de crédit en ligne</h3>
              <p>
                Il suffit, pour réaliser son prêt en ligne, de suivre les étapes
                ci-dessous :
              </p>
              <ul className="list-unstyled mt-5">
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <AiFillCheckCircle />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        1- Renseigner le formulaire de crédit en ligne.
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <AiFillCheckCircle />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        2- Obtention d’une réponse de principe immédiate
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <AiFillCheckCircle />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">
                        3- Signature du contrat et envoi des pièces
                        justificatives
                      </h6>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="d-flex align-items-center">
                    <div>
                      <Badge className="badge-circle mr-3" color="success">
                        <AiFillCheckCircle />
                      </Badge>
                    </div>
                    <div>
                      <h6 className="mb-0">4- Versement des fonds demandés</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionTwo;
