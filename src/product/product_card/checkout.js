import { useEffect, useState } from "react";
import Nav from "../../common/navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../../Login/authContext";
// import prompts from "prompts";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // Load cart data from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeCart = (productId) => {
    // Remove the product from the cart
    const updatedCart = cart.filter((products) => products.id !== productId);
    setCart(updatedCart);

    // Update localStorage to remove the product
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const {login, isAuthenticated,logout} =useAuth();
  
  return (
    <>
      <Nav />
      <div className="card  text-white">
        <img
          src="./image/about/bedam.jpg"
          className="card-img header_imag"
          alt="helo"
        />
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1 text-dark">Cart</h5>
        </div>
      </div>
      <div className="container tables_marging">
        <div class="row row-cols-1 row-cols-md-2 g-4 my-5">
          <div class="col">
            <div>
         {isAuthenticated? (
              <button onClick={logout} className="btn btn-danger">Logout</button>
          ) : (
              <Link to="/login" className="btn btn-danger">Login</Link>
          )}

            </div>
            <div class="card border-0">
              <div class="card-body">
                <h1>Billing details</h1>
                <div className="d-flex justify-content-around">
                  <div>
                    <label htmlFor="first_name">
                      <b>First name</b> <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className=" p-4 rounded-pill first_name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">
                      <b>Last name</b> <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="p-4 rounded-pill first_name"
                    />
                  </div>
                </div>
                <div className="mx-4 pt-2">
                  <label htmlFor="company" className="pt-2">
                    <b>Company name</b> (optional)
                  </label>
                  <input type="text" className="p-4 rounded-pill w-100" />
                  <p className="pt-3">
                    Country / Region <span>*</span>
                  </p>
                  <p className="text-center">
                    <b>India</b>
                  </p>
                  <label htmlFor="address">
                    <b>Street address</b>
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    id="address"
                    className="p-4 rounded-pill w-100"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="p-4 rounded-pill w-100 my-4 "
                  />
                  <label htmlFor="city">
                    <b>Town / City </b>
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mb-4 p-4 rounded-pill w-100"
                  />
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    className="p-4 w-100 rounded-pill"
                  >
                    <option selected>Telangana</option>
                    <option value="1">Tamil Nadu</option>
                    <option value="2">Tripura</option>
                    <option value="3">Uttarakhanad</option>
                    <option value="3">uttar Pradesh</option>
                  </select>

                  <label htmlFor="pin">
                    <b>PIN Code </b>
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="pin"
                    className="mb-4 p-4 rounded-pill w-100"
                  />
                  <label htmlFor="Phone">
                    <b>Phone </b>
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mb-4 p-4 rounded-pill w-100"
                  />
                  <label htmlFor="Phone">
                    <b>Email address </b>
                    <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="mb-4 p-4 rounded-pill w-100"
                  />

                  <p className="d-flex">
                    <input
                      type="checkbox"
                      id="account"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    />
                    <label htmlFor="account"> Create an account?</label>
                  </p>
                  <div class="collapse" id="collapseExample">
                    <label htmlFor="password">
                      <b>Create account password</b>
                      <span>*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mb-4 p-4 rounded-pill w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <div class="card-body">
                <p className="d-flex">
                  <input
                    type="checkbox"
                    id="different_address"
                    data-bs-toggle="collapse"
                    href="#different"
                    role="button"
                    aria-expanded="false"
                    aria-controls="different"
                  />
                  <label htmlFor="different_address">
                    {" "}
                    Ship to a different address?
                  </label>
                </p>
                <div class="collapse" id="different">
                  <div className="d-flex justify-content-around">
                    <div>
                      <label htmlFor="first_name">
                        <b>First name</b> <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className=" p-4 rounded-pill first_name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name">
                        <b>Last name</b> <span>*</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="p-4 rounded-pill first_name"
                      />
                    </div>
                  </div>
                  <div className="mx-4 pt-2">
                    <label htmlFor="company" className="pt-2">
                      <b>Company name</b> (optional)
                    </label>
                    <input type="text" className="p-4 rounded-pill w-100" />
                    <p className="pt-3">
                      Country / Region <span>*</span>
                    </p>
                    <p className="text-center">
                      <b>India</b>
                    </p>
                    <label htmlFor="address">
                      <b>Street address</b>
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      id="address"
                      className="p-4 rounded-pill w-100"
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      className="p-4 rounded-pill w-100 my-4 "
                    />
                    <label htmlFor="city">
                      <b>Town / City </b>
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="mb-4 p-4 rounded-pill w-100"
                    />
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      className="p-4 w-100 rounded-pill"
                    >
                      <option selected>Telangana</option>
                      <option value="1">Tamil Nadu</option>
                      <option value="2">Tripura</option>
                      <option value="3">Uttarakhanad</option>
                      <option value="3">uttar Pradesh</option>
                    </select>

                    <label htmlFor="pin">
                      <b>PIN Code </b>
                      <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="pin"
                      className="mb-4 p-4 rounded-pill w-100"
                    />
                  </div>
                </div>
                <label htmlFor="Order">
                  <b>Order notes (optional)</b>
                </label>
                <textarea
                  name="order"
                  id="Order"
                  cols="30"
                  rows="7"
                  className="mb-4  border_text w-100"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <h1>Your order</h1>
        <table className="table">
          <thead className="bg-dark text-light">
            <th className="py-3">Product</th>
            <th className="py-3">Subtotal</th>
          </thead>
          <tbody>
            {cart.map((products, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>
                      <h3>{products.title} x </h3>
                      <b>Quantity:</b>
                      {products.Quantity}
                    </td>
                    <td>&#x20B9;{products.quantity*products.price}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
            disabled
          />
          <label className="form-check-label" for="exampleRadios1">
            Cash on Delivery: Pay on the first day of your meals.
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDisabled"
          />
          <label className="form-check-label" for="flexCheckDisabled">
            <b>I have read and agree to the website terms and conditions</b>
            <span>*</span>
          </label>
        </div>
        <button className="btn view my-3 px-5">Place order</button>

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
                    <div className="card mb-3">
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
    </>
  );
};
export default Checkout;
