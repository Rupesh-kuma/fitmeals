import { Navigate, Route, Routes, Switch } from "react-router-dom";
import "./App.css";
import Home from "./home/home_main";
import Login from "./Login/login";
import Main from "./health_coaching/health_main";
import Error from "./common/error";
import SignUp from "./Login/signup";
import { useAuth } from "./Login/authContext";
import Weight from "./meal_plant/Weight_loss_meal_plan/weight_loss";
import Blog from "./blog/main_blog";
import Ourmain from "./about/our_story.js/our_story_main";
import Faqmain from "./about/faq/faq-main";
import Testimonials from "./about/Testimonials/testimonials_main";
import Maintenacemain from "./meal_plant/Maintenance/maintenance_main";
import Athleticmain from "./meal_plant/Athletic/Athletic_main";
import Ketomain from "./meal_plant/keto/keto_main";
import Transformationmain from "./meal_plant/Transformation/Transformation_main";
import Veganmain from "./product/Vegan_sweets/Vegan_main";
import ProductCard from "./product/product_card/productCard";
import Low from "./product/Vegan_sweets/low_calorie_sauces";
import { ProductProvider } from "./product/product_card/product_context";
// import { ProductProvider } from "./product/product_card/product_context";
import Cart from "./product/product_card/cart_view";
import Checkout from "./product/product_card/checkout";
import Butters from "./product/Vegan_sweets/nut_butters";
import Meals from "./product/Vegan_sweets/meal_plans";
import Productlist from "./product/product_card/products";
import Keto from "./product/Vegan_sweets/keto_plan";
import Musclegain from "./product/Vegan_sweets/muscle_gain_plan";
import Transformation from "./product/Vegan_sweets/transformation_challenge";
import Weights from "./product/Vegan_sweets/weight_loss_plan";
import Weightmaintenance from "./product/Vegan_sweets/weight_maintenance_plan";
import Freshbakes from "./product/Vegan_sweets/fresh_bakes";
import Refund from "./product/Vegan_sweets/refund";
import Terms from "./product/Vegan_sweets/terms_conditions";
import Privacy from "./product/Vegan_sweets/privacy_policy";

function App() {
  return (
    <>
    <ProductProvider>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/health_coaching"
           element={<Main />} 
        />
        <Route
          path="/meal_plans"
           element={<Weight />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/About" element={<Ourmain />} />
        <Route path="/Faq" element={<Faqmain />} />
        <Route
          path="/Testimonials"
           element={<Testimonials />} 
        />
        <Route
          path="/maintenace_meal_plans"
           element={<Maintenacemain />} 
        />
        <Route
          path="/Athletic"
           element={<Athleticmain />} 
        />
        
          <Route
            path="/Keto"
             element={<Ketomain />} 
          />
          <Route
            path="/Transformation"
             element={<Transformationmain />} 
          />
          <Route
            path="/vegan_sweets"
             element={<Veganmain />} 
          />
          <Route
            path="/low_cal_sauces"
            element={<Low />} 
          />
          <Route
            path="/stro/:productId"
            element={<ProductCard />} 
          />
           <Route
            path="/cart"
             element={<Cart />} 
          />
          <Route
            path="/checkout"
             element={<Checkout />} 
          />
           <Route
            path="/nut_butters"
             element={<Butters />} 
          />
          <Route
            path="/meals_plans"
             element={<Meals />} 
          />
          <Route
            path="/products"
             element={<Productlist />} 
          />
          <Route
            path="/keto_plan"
             element={<Keto />} 
          />
           <Route
            path="/muscle_gain_plan"
             element={<Musclegain />}
          />
          <Route
            path="/transformation_challenge"
             element={<Transformation />} 
          />
          <Route
            path="/weight_loss_plan"
             element={<Weights />} 
          />
          <Route
            path="/weight_maintenance_plan"
             element={<Weightmaintenance />} 
          />
          <Route
            path="/fresh_bakes"
             element={<Freshbakes />} 
          />
          <Route
            path="/refund"
             element={<Refund />} 
          />
          <Route
            path="/termscondition"
             element={<Terms />} 
          />
          <Route
            path="/privacypolicy"
             element={<Privacy />} 
          />
           <Route
            path="/*"
             element={<Error />} 
          />
        </Routes>
      </ProductProvider>
    </>
  );
}


export default App;

// PrivateRoute.js
