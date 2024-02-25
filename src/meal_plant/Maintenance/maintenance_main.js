import "../meal_plant.css";
import Nav from "../../common/navbar";
import Maintenancebanner from "./Maintenance_banner";
import Maintenancediaries from "./maintenance_diaries";
import Maintenanceorder from "./maintenance_order";
import Maintenaceselect from "./maintenance_select_plan";
import Maintenaceimage from "./maintenance_image";
import Foots from "../../common/footers";

const Maintenacemain=()=>{
    return(
        <>
        <Nav/>
        <Maintenancebanner/>
        <Maintenancediaries/>
        <Maintenaceselect/>
        <Maintenanceorder/>
        <Maintenaceimage/>
        <Foots/>
        </>
    )
}
export default Maintenacemain;