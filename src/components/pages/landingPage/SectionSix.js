import React from "react";
import classnames from "classnames";

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
    <section className="section section-lg pt-0">
      <Container>
        <Card className="bg-gradient-warning shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <Col lg="8">
                <h3 className="text-white">
                  Quels organismes pour votre crédit en ligne ?
                </h3>
                <p className="lead text-white mt-3">
                  Il vous est possible de faire une demande de crédit en
                  ligne auprès de différents acteurs du marché. Ces organismes
                  reconnus comme des spécialistes en la matière sont à
                  même de répondre aux attentes des emprunteurs qui souhaitent
                  obtenir un crédit.
                </p>
              </Col>
              <Col className="ml-lg-auto" lg="3">
                <Button
                  block
                  className="btn-white"
                  color="default"
                  href="/banques"
                  size="lg"
                >
                  Liste des organismes
                </Button>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default SectionOne;
