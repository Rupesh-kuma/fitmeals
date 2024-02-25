import "../about.css";
import Nav from "../../common/navbar";
import Ourbanner from "./banner";
import Began from "./our_began";
import Mission from "./Our_mission";
import Foot from "../../common/footer";

const Ourmain=()=>{
    return(
        <>
        <Nav/>
        <Ourbanner/>
        <Began/>
        <Mission/>
        <Foot/>
        </>
    )
}
export default Ourmain;