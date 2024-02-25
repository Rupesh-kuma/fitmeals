import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../common/navbar";
import "../product.css";
import { updateLocalStorage } from "../../utils/utils";
import { Card } from "react-bootstrap";

const ProductCard = () => {
  const { productId } = useParams();
  const [vegan, setVegan] = useState({});
  const [quantity, setQuantity] = useState(1);
  // const { products, updateProduct } = useProduct();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadVegan = async () => {
      axios
        .get("/data/product_detail.json")
        .then((response) => {
          setVegan(response.data);
          // console.log("data", response);
        })
        .catch((error) => {
          console.error("Axios error:", error);
        });
    };
    loadVegan();
  }, []);

  function productContent() {
    for (const key in vegan) {
      if (key == productId) {
        return vegan[key];
      }
    }
  }

  const _getProduct = productContent() || {};

  const handleIncreaseQuantity = () => {
    setQuantity(Number(quantity + 1));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(Number(quantity - 1));
    }
  };

  useEffect(() => {
    // Load cart data from localStorage on component mount
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    // Save cart data to localStorage whenever the cart changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(event, product) {
    event.stopPropagation();
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateLocalStorage("cart", cart);
  }

  const removeCart = (productId) => {
    // Remove the product from the cart
    const updatedCart = cart.filter((products) => products.id !== productId);
    setCart(updatedCart);

    // Update localStorage to remove the product
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Nav />
      <div className="card  text-white">
        <img src={_getProduct.url} className="card-img header_imag" alt="helo" />
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1 text-dark">{_getProduct.title}</h5>
        </div>
      </div>
      <div classNameName="container">
        <div className="card mb-3 productdetail">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={_getProduct.url}
                className="w-100 rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-danger mb-5">
                  &#x20B9; {_getProduct.price}
                </h5>
                <p className="card-text ms-2 mb-0 detail_quantity-color">
                  Quantity
                </p>
                <input
                  className="form-check-input ms-2"
                  type="checkbox"
                  value=""
                  id="flexCheckCheckedDisabled"
                  checked
                />
                <label
                  className="form-check-label detail_quantity-color"
                  for="flexCheckCheckedDisabled"
                >
                  {_getProduct.Quantity}
                </label>
                <div className="d-flex my-5">
                  <div class="quantity d-flex border">
                    <span className=" p-3"> {quantity}</span>
                    <div className="">
                      <button
                        onClick={handleIncreaseQuantity}
                        className="border border-0 me-2 bg-transparent"
                      >
                        <i className="fa-solid fa-angle-up"></i>
                      </button>
                      <br />
                      <button
                        onClick={handleDecreaseQuantity}
                        className="border border-0 me-2 bg-transparent"
                      >
                        <i className="fa-solid fa-angle-down"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn ms-3 addCard btn-danger border-0"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#addcard"
                    onClick={(e) => addToCart(e, _getProduct)}
                  >
                    <b>Add to cart</b>
                  </button>
                </div>
                <b>Categories:</b>&nbsp;<span>{_getProduct.Categories}</span>
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
                            alt="..."
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

        <ul
          className="nav nav-tabs  justify-content-center gap-5 mb-3 py-5"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item " role="presentation">
            <a
              className="nav-link active detail_border"
              id="ex3-tab-1"
              data-bs-toggle="tab"
              href="#ex3-tabs-1"
              role="tab"
              aria-controls="ex3-tabs-1"
              aria-selected="true"
            >
              Description{" "}
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link detail_border"
              id="ex3-tab-2"
              data-bs-toggle="tab"
              href="#ex3-tabs-2"
              role="tab"
              aria-controls="ex3-tabs-2"
              aria-selected="false"
            >
              Reviews (0)
            </a>
          </li>
        </ul>

        <div className="tab-content" id="ex2-content">
          <div
            className="tab-pane fade show active"
            id="ex3-tabs-1"
            role="tabpanel"
            aria-labelledby="ex3-tab-1"
          >
            <p>{_getProduct.paragraph}</p>
            <h4>{_getProduct && _getProduct.headerabout}</h4>

            {_getProduct &&
              _getProduct.aboutproduct &&
              _getProduct.aboutproduct.map((item,i) => {
                return (
                  <ul key={i}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            <h2 className="text-center my-3">Related products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {_getProduct &&
                _getProduct.releatedProduct &&
                _getProduct.releatedProduct.map((product,i) => {
                  return (
                    <div className="col" key={i}>
                      <div className="card border-0">
                        <img
                          src={product.url}
                          className="card-img-top detail_roundeds"
                          alt="..."
                        />
                        <div className="card-body lh-lg text-center">
                          <h3 className="card-title py-2">
                            <Link
                              to={`/stro/${product.id}`}
                              className="nav-link detail_link_title"
                            >
                              {product.title}
                            </Link>
                          </h3>
                          <b className="text-danger">
                            &#x20B9; {product.price}
                          </b>
                          <br />
                          <button className="btn btn-danger my-3 py-2 w-100 rounded-pill">
                            <Link
                              to={`/stro/${product.id}`}
                              className="nav-link"
                            >
                              Select option
                            </Link>
                          </button>
                          <br />
                          <Link
                            to={`/stro/${product.id}`}
                            className="nav-link detail_link"
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="ex3-tabs-2"
            role="tabpanel"
            aria-labelledby="ex3-tab-2"
          >
            <p className="text-center">There are no reviews yet</p>
            <h2 className="text-center">Be the first to review “Seed Bars”</h2>
            <div className="detail_form">
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <b>Your rating *</b>
              <br />
              <p>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
              <form action="">
                <label htmlFor="review">
                  <b>Your review *</b>
                </label>
                <br />
                <textarea
                  name=""
                  id="review"
                  cols="30"
                  rows="10"
                  className="w-100 inputs mb-4"
                ></textarea>
                <br />
                <label htmlFor="name">
                  <b>Name *</b>
                </label>
                <br />
                <input type="text" name="name" className="w-100 inputs mb-4" />
                <br />
                <label htmlFor="email">
                  <b>Email *</b>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="w-100 mb-4 inputs"
                />
                <br />
                <input type="submit" className="form_submit" />
              </form>
            </div>
            <h2 className="text-center">Related products</h2>
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
export default ProductCard;
