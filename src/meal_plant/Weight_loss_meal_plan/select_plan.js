const Order = () => {
  return (
    <>
      <div className="work_bgs pb-5">
        <div className="container pt-5">
          <span className="justify-content-center fs-1 orders Sacramento_font d-flex ">How Does It Work?</span>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-mobile-screen-button fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Select your plan</h5>
                  <p className="card-text">
                    Choose the meal plan you want based on your preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex  justify-content-center">
                  <i className="fa-solid fa-user fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Nutrition Support</h5>
                  <p className="card-text">
                    Our nutritionists will design your meals & will be available
                    for further consultations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex  justify-content-center">
                  <i className="fa-solid fa-motorcycle fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Home delivery</h5>
                  <p className="card-text">
                    Freshly prepared, hot meals will be delivered right at your
                    doorstep.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex  justify-content-center">
                  <i className="fa-solid fa-gift fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Enjoy your meal</h5>
                  <p className="card-text">
                    Microwave the food if needed then dig in!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
