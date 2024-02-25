import Foots from "../../common/footers";
import Nav from "../../common/navbar";
import Transferablediaries from "./transformation_diaries";
import Transformationlook from "./transformation_look";
import Transformationorder from "./transformation_order";
import Transformationselect from "./transformation_select";
import Transformationbanner from "./transformationbanner";

const Transformationmain=()=>{
    return(
        <>
        <Nav/>
        <Transformationbanner/>
        <Transformationlook/>
        <Transformationselect/>
        <Transformationorder/>
        <Transferablediaries/>
        <Foots/>
        </>
    )
}
export default Transformationmain;