import { useEffect, useState } from "react";
import Nav from "../../common/navbar";
import { Link } from "react-router-dom";
import { updateLocalStorage } from "../../utils/utils";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [flag, setFlag] = useState(false);
  const [qut, setQut] = useState(0);
  const [prdQty, setPrdQty] = useState([]);

  function updateQuantity(e, productId, newQuantity) {
    // e.stopPropagation();
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    updateLocalStorage('cart', updatedCart);
    setCart(updatedCart);
  }

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

  const handleSubmit = (event, products) => {
    event.preventDefault(); // Prevent page refresh on form submission

    // Save quantity to local storage
    // localStorage.setItem(`quantity_${products?.id}`, qut);
  };
  const storedQuantity = localStorage.getItem("quantity");
  // console.log("storedQuantity", storedQuantity);
  
  function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  const totalPrice = calculateTotalPrice(cart);
  const [modalVisible, setModalVisible] = useState(true);
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
      <div className="container">
        <div className="tables_marging">
          <table className="table">
            <thead className="border bg-dark text-light text-center tables-ds">
              <th></th>
              <th></th>
              <th className="pt-3 pb-3">Product</th>
              <th className="pt-3 pb-3">Price</th>
              <th className="pt-3 pb-3">Quantity</th>
              <th className="pt-3 pb-3">Subtotal</th>
            </thead>
            <tbody className="border">
              {cart.map((products, i) => {
                console.log('......Cart', products.quantity);
                return (
                  <>
                    <tr key={i} className="tables-ds">
                      <td className="p-4">
                        <button
                          onClick={() => removeCart(products.id)}
                          className=" border-0 bg-transparent text-danger"
                        >
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </td>
                      <td>
                        {" "}
                        <img
                          src={products.url}
                          className="img-fluid tables_image "
                          alt={products.title}
                        />
                      </td>
                      <td className="px-4">
                        <h3>{products.title}</h3>
                        <b>Quantity :</b>
                        {products.Quantity}
                      </td>
                      <td className="p-4">
                        <b className="text-danger">
                          &#x20B9; {products.price}
                        </b>
                      </td>
                      <td className="py-4">
                        <div className="quantity  border">
                          <span className=" p-3"> {products.quantity}</span>
                          <div>
                          <button
                            key="increase"
                            onClick={(event) =>
                              updateQuantity(
                                event,
                                products.id,
                                products.quantity + 1
                              )
                            }
                            className="border border-0 me-2 bg-transparent"
                            name="increase"
                          >
                            <i className="fa-solid fa-angle-up"></i>
                          </button>
                          {/* <br /> */}
                          <button
                            key="decrease"
                            onClick={(event) =>
                              updateQuantity(
                                event,
                                products.id,
                                products.quantity - 1
                              )
                            }
                            className="border border-0 me-2  bg-transparent"
                            name="decrease"
                          >
                            <i className="fa-solid fa-angle-down"></i>
                          </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="card-text">
                          {products.quantity} x &#x20B9;{products.price} =
                          &#x20B9; {products.quantity * products.price}{" "}
                        </p>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <div>
              <input
                type="text"
                placeholder="coupon code"
                className="p-2 border-0 rounded-start"
              />
              <button className="bg-danger px-4 py-2 rounded-pill border-0 btn">
                Apply coupon
              </button>
            </div>
            <button className="btn ">UPDATE CART</button>
          </div>
          <div className="d-flex justify-content-end mt-5">
            <table className="table  w-50 text-center">
              <tr>
                <th>Subtotal</th>
                <th>&#x20B9; {totalPrice}</th>
              </tr>
              <tr>
                <th>Shipping</th>
                <td className="lh-1">
                  <p>Flat rate:&#x20B9; 50.00</p>
                  <p>Shipping to Telangana.</p>
                  <h4 className="fs-6">
                    CHANGE ADDRESS<i className="fa-solid fa-truck"></i>
                  </h4>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>&#x20B9; {totalPrice+50}</td>
              </tr>
            </table>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger w-50">
              <Link to="/checkout">Proceed to checkout</Link>
            </button>
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
export default Cart;
