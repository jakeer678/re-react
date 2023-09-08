import { Fragment } from "react";
import Auth from "./Components/Auth";
import Banner from "./Components/Banner";
import ChasisNumber from "./Components/ChasisNumber";
import MotorDetails from "./Components/MotorDetails";
import OtpVerify from "./Components/OtpVerify";
import RegisterMotor from "./Components/RegisterMotor";
import VerifyNumber from "./Components/VerifyNumber";
import Routing from "./Routes/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
