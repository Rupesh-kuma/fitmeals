import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../product_card/product_context";
import Nav from "../../common/navbar";
import Foots from "../../common/footers";
// import { sync } from "resolve";

const Low = () => {
  const [vegan, setVegan] = useState([]);
  const { products } = useProduct();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const loadVegan = async () => {
      try {
        const loadVegan = await fetch("./data/low_calorie_sauces.json");
        const response = await loadVegan.json();
        setVegan(response);
        
      } catch (error) {
        console.log(error);
      }
      
    };
   
      loadVegan();
    
   
  }, []);
  useEffect(() => {
    // Load cart data from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);
  const removeCart = (productId) => {
    // Remove the product from the cart
    const updatedCart = cart.filter((products) => products.id !== productId);
    setCart(updatedCart);

    // Update localStorage to remove the product
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Function to sort products by price (low to high)
  const sortByPriceLowToHigh = () => {
    const sortedProducts = [...vegan].sort((a, b) => a.price - b.price);
    setVegan(sortedProducts);
  };

   // Function to sort products by price (high to low)
   const sortByPriceHighToLow = () => {
    const sortedProducts = [...vegan].sort((a, b) => b.price - a.price);
    setVegan(sortedProducts);
  };

  return (
    <>
    <Nav/>
    <div className="card  text-white vegan_banner">
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1 text-light">
          Low Calorie Sauces
          </h5>
        </div>
      </div>
      <div className="container py-5">
        <div className="card mb-3 border-0 m-5">
          <div className="row g-0">
            <div className="col-md-4">
              <input
                type="search"
                placeholder="Search"
                className="py-3 w-100 rounded-pill my-4"
              />
              <h2 className="pt-4">Product categories</h2>
              <hr className="hr_color"/>
              <ul>
                <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/diet_plans">Diet Plans</Link></li><hr />
                <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/meals_plans">Meal Plans</Link></li><hr/>
                <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/products">Products</Link></li><br />
                <ul>
                  <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/dishes">Dishes</Link></li><hr/>
                  <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/fresh_bakes">Fresh Bakes</Link></li><hr/>
                  <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline" to="/low_calorie_sauces">Low Calorie Sauces</Link></li><hr/>
                  <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline"to="/nut_butters">Nut Butters</Link></li><hr/>
                  <li className="list-group-item"><i className="fa-solid fa-chevron-right"></i>&nbsp; <Link className="nav-link d-inline"to="/vegan_sweets">Vegan Sweets</Link></li>
                </ul>
              </ul>
              <h3>Cart</h3>
              <hr className="hr_color"/>

              {
                cart.map((products,i)=>{
                  return(
                  <div className="card mb-3 border-0" id="nones" key={i}>
                    <div className="row g-0 position-relative">
                      <div className="col-md-2">
                        <img src={products.url} className="img-fluid product_img w-100 " alt={products.title}/>
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="card-title fs-6">{products.title}</h5>
                          <p className="card-text">{products.quantity} x &#x20B9;{products.price} = {products.quantity*products.price} </p>
                          <button onClick={() => removeCart(products.id)} className="position-absolute top-0 start-0 border-0 bg-transparent text-danger"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              }
              <div className="text-center cartview">
              <button className=" w-100 viewCart mb-4 view"><Link className="nav-link" to="/cart">View cart</Link></button>
              <button className=" w-100 viewCart checkout"><Link className="nav-link" to="/checkout">Checkout</Link></button>
              </div>  
               


              
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex justify-content-around default_sort_bg py-3 rounded-pill">
                  <span>Showing 1-6 of 10 results</span>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle categories_width"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Default sorting
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Default sorting
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by popularity
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by average rating
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sort by latest
                        </a>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={sortByPriceLowToHigh}>
                          Sort by price: low to high
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={sortByPriceHighToLow} >
                          Sort by price: high to low
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {vegan.map((stro) => {
                  return (
                   
                      <div className="col" key={stro.id}>
                        <div className="card border-0">
                          <img src={stro.url} className="card-img-top detail_roundeds" alt="..."/>
                          <div className="card-body lh-lg text-center">
                            <h3 className="card-title py-2"><Link to={`/stro/${stro.id}`} className="nav-link detail_link_title">{stro.title}</Link></h3>
                            <p className="card-text ">
                            {stro.paragraph}   
                            </p>
                            <b className="text-danger">&#x20B9;{stro.price}</b><br/>
                            <button className="btn btn-danger my-3 py-2 w-100 rounded-pill"><Link to={`/stro/${stro.id}`} className="nav-link">Select option</Link></button>
                            <br/>
                            <Link to={`/stro/${stro.id}`} className="nav-link detail_link">Read more</Link>
                          </div>
                        </div>
                      </div>
                   )
                })} 
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="addcard"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal_dialog">
            <div className="modal-content modal_contents">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  <span className="product_button_span_up">{cart.length}</span>{" "}
                  <i className="fa-solid fa-bag-shopping fs-1"></i> Your Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {cart.map((products, i) => {
                  return (
                    <div className="card mb-3" key={i}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img
                            src={products.url}
                            className="img-fluid rounded-start w-50 m-2"
                            alt={products.title}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <h5 className="card-title">{products.title}</h5>
                              <button
                                onClick={() => removeCart(products.id)}
                                className=" border-0 bg-transparent text-danger"
                              >
                                <i className="fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                            <p className="card-text">
                              {products.quantity} x &#x20B9;{products.price}={" "}
                              {products.quantity * products.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center cartview">
                <button className=" w-100 viewCart mb-4 view"  data-bs-dismiss="modal">
                  <Link className="nav-link" to="/cart">
                    View cart
                  </Link>
                </button>
                <button className=" w-100 viewCart checkout"  data-bs-dismiss="modal">
                  <Link className="nav-link" to="/checkout">
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="position-fixed d-block product_button  "
          data-bs-toggle="modal"
          data-bs-target="#addcard"
        >
          <span className="product_button_span">{cart.length}</span>{" "}
          <i className="fa-solid fa-cart-plus fs-2"></i>
        </button>
      </div>
      <Foots/>
    </>
  );
};
export default Low;
