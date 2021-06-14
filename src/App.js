import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "components/pages/Index.js";
import Profile from "components/pages/Profile.js";
import Register from "components/pages/Register.js";
import Footer from "components/Footers/SimpleFooter";
import DemoNavbar from "components/Navbars/DemoNavbar";
import banques from "components/pages/banques";
import offres from "components/pages/Offres";
import simulation from "components/pages/Simulation.js";
import Login from "components/pages/Login.js";
const App = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route
              path="/profile"
              exact
              render={() =>
                localStorage.getItem("token") ? (
                  <Profile />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="/register" component={Register} exact />
            <Route path="/simplefooter" component={Footer} exact />
            <Route path="/demonavbar" component={DemoNavbar} exact />
            <Route path="/banques" component={banques} exact />
            <Route path="/offres" component={offres} exact />
            <Route path="/simuler" component={simulation} exact />
            <Route
              path="/login"
              exact
              render={() =>
                localStorage.getItem("token") ? (
                  <Redirect to="/" />
                ) : (
                  <Login />
                )
              }
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </>
  );
};

export default App;
