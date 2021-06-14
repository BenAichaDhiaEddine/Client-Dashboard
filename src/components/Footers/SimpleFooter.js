import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SimpleFooter = () => {
  return (
    <>
      <footer className=" footer">
        <Container>
          <Row className=" row-grid align-items-center mb-5">
            <Col lg="6">
              <h3 className=" text-primary font-weight-light mb-2">
                Merci pour votre visite !
              </h3>
              <h4 className=" mb-0 font-weight-light">
                Entrons en contact sur l'une de ces plates-formes 
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://www.facebook.com/profile.php?id=2311018502477208&ref=content_filter"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Fait nous un j'aime
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://linkedin.com/company/arsela"
                id="tooltip829810202"
                target="_blank"
              >
                 <span className="btn-inner--icon">
                  <i class="fa fa-linkedin-square"
                  />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Suivez nous 
              </UncontrolledTooltip>
            </Col>
          </Row>
          <hr />
          <Row className=" align-items-center justify-content-md-between">
            <Col md="6">
              <div className=" copyright">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.arsela.co/en/"
                  target="_blank"
                >
                  Arsela Technologie
                </a>
                .
              </div>
            </Col>
            <Col md="6">
              <Nav className=" nav-footer justify-content-end">
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default SimpleFooter;
