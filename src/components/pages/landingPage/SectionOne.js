import React from "react";
import classnames from "classnames";
import { FaStopwatch } from "react-icons/fa";


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

function SectionOne() {
  return (
    <div>
      <section style={{ paddingTop: "4em", paddingBottom: "4em" }}>
        <Container>
          <Row className="justify-content-center">
          <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-check-bold" />
                      </div>
                      <h6 className="text-primary text-uppercase">
                        Un crédit juste
                      </h6>
                      <p className="description mt-3">
                        100% des intérêts sont reversés aux investisseurs
                        professionnels (particuliers et personnes morales :
                        entreprises, fondations, etc.)
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        
                            <FaStopwatch/>


                      </div>
                      <h6 className="text-success text-uppercase">
                        Un crédit rapide
                      </h6>
                      <p className="description mt-3">
                        Réponse de principe immédiate, décision de financement
                        sous A réception de votre dossier complet, Younited
                        Credit peut vous faire une réponse dans les 24h ouvrées
                        par SMS dans le cas d’une acceptation
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-planet" />
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Un crédit transparent
                      </h6>
                      <p className="description mt-3">
                        100% de nos clients bénéficient d’un crédit à taux fixe
                        et à échéance de remboursement fixe. Pas de frais ni de
                        clauses cachées, pas de crédit revolving
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SectionOne;
