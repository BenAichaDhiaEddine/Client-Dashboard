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
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";

function SectionOne() {
  return (
    <div>
      <section className="section section-lg">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="8">
              <h2 className="display-3">
              Profiter d'une meilleure offre de crédit 
                <span className="text-success">
                
                </span>
              </h2>
              <p className="lead">
                Vous souhaitez faire le tour du monde, organiser votre mariage
                ou équiper la maison de vos rêves ou bien realiser votre projet de reve ? Avec Nos offres de credit , empruntez jusqu’à 75 000 dt sur 4 à 72
                mois, le tout sans frais de dossier. Et vos projets deviennent
                réalité !
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SectionOne;
