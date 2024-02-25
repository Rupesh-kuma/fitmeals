import Foots from "../../common/footers";
import Nav from "../../common/navbar";
import Maintenanceorder from "../Maintenance/maintenance_order";
import Maintenaceselect from "../Maintenance/maintenance_select_plan";
import Ketobanner from "./keto_banner";
import Ketodiaries from "./keto_diaries";
import Ketolook from "./keto_look";

const Ketomain=()=>{
    return(
        <>
        <Nav/>
        <Ketobanner/>
        <Ketolook/>
        <Maintenaceselect/>
        <Maintenanceorder/>
        <Ketodiaries/>
        <Foots/>
        </>
    )
}
export default Ketomain;