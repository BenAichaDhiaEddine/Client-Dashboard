import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import navbarCss from "../../assets/css/NavBar/navbar.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons";

import {
  loginUser,
  loginSuccess,
  logoutUser,
  logoutUserSuccess,
  apiError,
} from "../../store/actions";

// reactstrap components

import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import { BiUserCircle } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

const DemoNavbar = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem("token")
  );

  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading, UserLoggedIn } = useSelector(({ Login }) => Login);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (payload) => {
    dispatch(loginUser({ payload, history }));
    console.log("payload", payload);
  };

  const logOut = () => {
    dispatch(logoutUser(history));
  };

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  useEffect(() => {
    if (errors.email?.type === "required") {
      toast.success("Le email est requis ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(errors);
    }
  }, [errors.email?.type === "required"]);

  useEffect(() => {
    if (errors.password?.type === "required") {
      toast.success("le mot de passe est requis", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errors.password?.type === "required"]);

  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };
  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container style={{ marginLeft: "0em" }}>
            <NavbarBrand
              className="mr-lg-5"
              to="/"
              tag={Link}
            >
              <img alt="..." src={require("assets/img/banc_logo1.png")} />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <NavItem>
                    <NavLink
                      href="/banques"
                      style={{
                        fontWeight: "bold",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Liste des banques
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/offres"
                      style={{
                        fontWeight: "bold",
                        display: "inline-block",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Simuler un crédit 
                    </NavLink>
                  </NavItem>
                </Nav>
                {isAuthenticated ? (

//connecté 

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/profile"
                    >
                      <IconContext.Provider
                        value={{
                          color: "#5e72e4",
                          size: "1.5em",
                        }}
                      >
                        <BiUserCircle />
                      </IconContext.Provider>
                      <span className="nav-link-inner--text ml-1">Profile</span>
                    </Button>
                  </NavItem>
                  <NavItem>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={logOut}
                    >
                      <IconContext.Provider
                        value={{
                          color: "#5e72e4",
                          size: "1.5em",
                        }}
                      >
                        <IoLogOutOutline />
                      </IconContext.Provider>
                      <span className="nav-link-inner--text ml-1">
                        Déconnexion
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
                ) : 


//Non connecté

                (
                  <Nav className="align-items-lg-center ml-lg-auto" navbar style={{ marginLeft:"10em !important"}}>
                    <NavItem>
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        onClick={() => history.push("/login")}
                      >
                        <IconContext.Provider
                          value={{
                            color: "#5e72e4",
                            size: "1.5em",
                          }}
                        >
                          <BiUserCircle />
                        </IconContext.Provider>
                        <span className="nav-link-inner--text ml-1">Connexion</span>
                      </Button>
                    </NavItem>
                    <NavItem>
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        onClick={() => history.push("/register")}
                      >
                        <IconContext.Provider
                          value={{
                            color: "#5e72e4",
                            size: "1.5em",
                          }}
                        >
                          <IoLogOutOutline />
                        </IconContext.Provider>
                        <span className="nav-link-inner--text ml-1" style={{display : "inline-block" , overflow:"hidden" , whiteSpace : "nowrap"}}>
                          Créer un compte
                        </span>
                      </Button>
                    </NavItem>
                  </Nav>
                  )

                }
              </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default DemoNavbar;
