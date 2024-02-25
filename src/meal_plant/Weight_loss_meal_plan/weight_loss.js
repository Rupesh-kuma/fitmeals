import "../meal_plant.css";
import Nav from "../../common/navbar";
import Diaries from "./Diaries";
import Box from "./box";
import Header from "./header";
import Week from "./order_plan";
import Order from "./select_plan";
import Foots from "../../common/footers";
const Weight=()=>{
    return(
        <>
            <Nav/>
            <Header/>
            <Order/>
            <Week/>
            <Diaries/>
            <Box/>
            <Foots/>
        </>
    )
}
export default Weight;