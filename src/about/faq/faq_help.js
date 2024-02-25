const Faqhelp = () => {
  return (
    <>
      <div className="container">
        <div className="card mb-3 border-0 p-4">
          <div className="row g-0">
            <div className="col-md-4 faqbotton">
              <h2 className="fs-1 py-2 px-1">If you need more help</h2>
              <p className="px-2 lh-lg">
                Have more queries regarding the plans or need a customised plan?
                No problem! Give us a call or send us an email and we will get
                back to you as soon as possible!
              </p>
              <ul className="ps-2 lh-lg">
                <li className="list-group-item py-3">
                  <i className="fa-solid fa-phone-volume faq-icon"></i>{" "}
                  <b>+91 9963697412</b>
                </li>
                <li className="list-group-item py-2">
                  <i className="fa-solid fa-message faq-icon"></i>{" "}
                  <b>fitmealsindia@gmail.com</b>
                </li>
                <li className="list-group-item py-3">
                  <i className="fa-solid fa-location-dot faq-icon"></i>{" "}
                  <b>Banjara Hills, road no.5</b>
                  
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item my-3 border-0 py-4">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <b>Why should I choose Fitmeals?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We take pride in procuring the best quality of
                        ingredients and preparing delicious yet highly
                        nutritious meals. Our food is not only freshly prepared
                        but is also hygiene approved.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <b>
                          I'm a vegetarian on some days and eat non-veg on other
                          days, can I change my meals based on that?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We are very flexible in the service we provide, you can
                        just let us know about your food preferences and we will
                        send meals with respect to that.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <b>What payment methods exist in your company?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        You can pay by cash, card, Gpay, Paytm, PhonePay.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <b>
                          {" "}
                          Can I get a refund if I don't want to continue the
                          service?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        At Fitmeals, we have a STRICT no refund policy. We’d
                        suggest you to go for the trial plans first.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <b>Is your meat halal?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes absolutely, our meals are 100% halal
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <b>
                          {" "}
                          What if I'm travelling or don't want meals on a
                          particular day?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        If you wish to pause or cancel your meals, you just have
                        to inform us one day prior and we’ll stop your services
                        immediately.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        <b>Do you guarantee weight loss?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        We do not guarantee weight loss since every body type is
                        different; our diet plans may work for some while others
                        won’t see a difference. However, we will try our best
                        and alter the diet accordingly to help your reach your
                        goals.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item my-3 border-0">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed helpbtn"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        <b> How do I know which plan to choose?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        If you can’t understand which plan would work the best
                        for you, you can contact our nutritionists directly at
                        9100347480 for a consultation session.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faqhelp;
