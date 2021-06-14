import React from "react";
import classnames from "classnames";
import { BsSearch } from "react-icons/bs";

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

function SectionThree() {
  return (
    <section className="section bg-secondary">
      <Container>
        <Row className="row-grid align-items-center">
          <Col md="6">
            <Card className="bg-default shadow border-0">
              <CardImg
                alt="..."
                src={require("assets/img/theme/picTwo.png")}
                top
              />
              <blockquote className="card-blockquote">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg-bg"
                  preserveAspectRatio="none"
                  viewBox="0 0 583 95"
                >
                  <polygon className="fill-default" points="0,52 583,95 0,95" />
                  <polygon
                    className="fill-default"
                    opacity=".2"
                    points="0,42 583,95 683,0 0,95"
                  />
                </svg>
                <p className="lead text-italic text-white">
                  Aujourd’hui, avec Internet, même emprunter de l’argent peut se
                  faire à distance. Quel que soit votre budget ou votre projet,
                  vous trouverez ici un crédit en ligne qui répond à
                  vos attentes. il ne faut pas oublier
                  qu’un crédit vous engage et doit être remboursé.
                </p>
              </blockquote>
            </Card>
          </Col>
          <Col md="6">
            <div className="pl-md-5">
              <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
              <BsSearch/>
              </div>
              <h3>N'hésitez pas ! Faire votre recherche</h3>
              <p className="lead">
                Avec l’essor d’internet, il est devenu plus facile d’obtenir un
                prêt en ligne.
              </p>
              <p>
                Si les organismes de crédit à la consommation propose tous cette
                solution, c’est loin d’être toujours le cas dans les banques.
              </p>
              <p>
                Notre comparateur propose de comparer directement les taux de
                crédit consommation en ligne et de simuler le meilleur taux de
                prêt immobilier que chacun peut obtenir.
              </p>
              <a
                className="btn-white btn btn-default btn-lg btn-block"
                href="/simuler" 
              style={{color:"white" , backgroundColor:"#172b4d"}}
              >
                Simuler votre prochaine credit maintenant
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionThree;
