import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
} from "../../store/auth/registre/actions";
// reactstrap components
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import SectionOne from "./landingPage/SectionOne.js"
import SectionTwo from "./landingPage/SectionTwo.js"
import SectionThree from "./landingPage/SectionThree.js"
import SectionFour from "./landingPage/SectionFour.js"
import SectionFive from "./landingPage/SectionFive.js"
import SectionSix from "./landingPage/SectionSix.js"
import SectionSeven from "./landingPage/SectionSeven.js";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { registrationError, message, loading } = useSelector(
    ({ Account }) => Account
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  var inputRef = useRef(null);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const onSubmit = (payload) => {
    const newPayload = { payload, history };
    dispatch(registerUser({ payload, history }));
  };

  return (
    <>
      <DemoNavbar />
      <main ref={inputRef}>
      </main>
      <SectionFour/>
      <SectionTwo/>
      <SectionSix/>
      <SectionFive/>
      <SectionOne/>
      <SectionSeven/>
      <SectionThree/>
      <SimpleFooter />
    </>
  );
};

export default Index;
