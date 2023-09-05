import Auth from "./Components/Auth";
import Banner from "./Components/Banner";
import ChasisNumber from "./Components/ChasisNumber";
import MotorDetails from "./Components/MotorDetails";
import OtpVerify from "./Components/OtpVerify";
import RegisterMotor from "./Components/RegisterMotor";

function App() {
  return (
    <>
      <Banner />
      <Auth />
      <OtpVerify />
      <RegisterMotor />
      <MotorDetails />
      <ChasisNumber />
    </>
  );
}

export default App;
