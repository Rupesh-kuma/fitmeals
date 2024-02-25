import Veganbanner from "./Vegan_banner";
import '../product.css'
import Nav from "../../common/navbar";
import Categories from "./vegan_Product_categories";
const Veganmain=()=>{
    return(
        <>
        <Nav/>
        <Veganbanner/>
        <Categories/>
        </>
    )
}
export default Veganmain;