import Foots from "../../common/footers";
import Nav from "../../common/navbar";
import Maintenanceorder from "../Maintenance/maintenance_order";
import Maintenaceselect from "../Maintenance/maintenance_select_plan";
import Atheticbox from "./athetic_box";
import Athleticbanner from "./athletic_banner";
import Athleticdiaries from "./athletic_diaries";
import Athleticorder from "./athletic_order";

const Athleticmain=()=>{
    return(
        <>
        <Nav/>
        <Athleticbanner/>
        <Athleticdiaries/>
        <Maintenaceselect/>
        <Maintenanceorder/>
        <Athleticorder/>
        {/* <Atheticbox/> */}
        <Foots/>
        </>
    )
}
export default Athleticmain;