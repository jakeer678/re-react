import React, { Fragment } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Auth from "../Components/Auth";
import VerifyNumber from "../Components/VerifyNumber";
import OtpVerify from "../Components/OtpVerify";
import RegisterMotor from "../Components/RegisterMotor";
import MotorDetails from "../Components/MotorDetails";
import ChasisNumber from "../Components/ChasisNumber";
import EnterOtp from "../Components/EnterOtp";
import Banner from "../Components/Banner";

const Routing = () => {
  return (
    <Fragment>
      <Routes>
        <Route
          element={
            <div>
              <Banner />
              <Outlet />
            </div>
          }
        >
          <Route path="/" element={<Banner />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/verifyNumber" element={<VerifyNumber />} />
          <Route path="/enterOtp" element={<EnterOtp />} />
          <Route path="/otpVerify" element={<OtpVerify />} />
          <Route path="/registerMotor" element={<RegisterMotor />} />
          <Route path="/motorDetails" element={<MotorDetails />} />
          <Route path="/chasisNumber" element={<ChasisNumber />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default Routing;
