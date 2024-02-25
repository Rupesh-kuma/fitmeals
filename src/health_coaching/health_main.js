import Appointment from "./appointment_time";
import Banner from "./banner";
import Life from "./change_life";
import './health_coaching.css';
import Helps from "./health_helps";
import Work from "./work";
import Range from "./range_progrash";
import Nav from "../common/navbar";
import Track from "./health_trackers";
import Foot from "../common/footer";

const Main = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Helps />
      <Appointment />
      <Life />
      <Work />
      <Range />
      <Track/>
      <Foot/>
    </>
  );
};
export default Main; 