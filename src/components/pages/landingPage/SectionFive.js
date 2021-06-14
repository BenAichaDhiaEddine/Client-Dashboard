import React from "react";
import classnames from "classnames";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IconContext } from "react-icons";

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

function SectionFive() {
  return (
    <section
      className="section section-lg bg-gradient-default"
      style={{ paddingBottom: "-5em" }}
    >
      <Container>
        <Row className="text-center justify-content-center">
          <Col lg="10">
            <h2 className="display-3 text-white">
              Les avantages du crédit en ligne
            </h2>
            <p className="lead text-white">
              La digitalisation des procédures des credits bancaires a des
              plusieurs avantages tels que :
            </p>
          </Col>
        </Row>
        <Row className="row-grid mt-5">
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <AiOutlineFieldTime />
            </div>
            <h5 className="text-white mt-3">Gain de temps</h5>
            <p className="text-white mt-3">
              Le premier avantage de la souscription d’un crédit en ligne, c’est
              qu’elle est rapide. De plu, l’utilisation d’un comparatif est
              aussi le gain de temps. Chercher un prêt peut prendre du temps.
              Or, si l’on est pressé et que le client a besoin d’argent le plus
              vite possible, demander un crédit à son banquier est loin d’être
              la meilleure solution.
            </p>
          </Col>
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-ruler-pencil text-primary" />
            </div>
            <h5 className="text-white mt-3">Obtention d’un meilleur taux</h5>
            <p className="text-white mt-3">
              Soyons honnêtes, si les banques peuvent parfois effectivement
              proposer des taux intéressants, c’est loin d’être toujours le cas.
              La fidélité du client n’est pas forcément récompensée. Même avec
              un bon profil et un bon dossier, il n’est pas assuré que le client
              se voie proposer le crédit le moins cher
            </p>
          </Col>
          <Col lg="4">
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-atom text-primary" />
            </div>
            <h5 className="text-white mt-3">Crédit en ligne facile</h5>
            <p className="text-white mt-3">
              La demande de crédit en ligne est facile. Il suffit tout
              simplement de suivre les instructions. Lors de l’impression du
              contrat, celui-ci est généralement déjà pré-rempli. Le client doit
              donc simplement signer et l’envoyer par voie postale
            </p>
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
export default SectionFive;
