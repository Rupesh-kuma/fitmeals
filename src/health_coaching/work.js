const Work = () => {
  return (
    <>
      <div className="work_bg pb-5">
        <div className="container pt-5">
          <span className="d-flex justify-content-center fs-1 py-5 Sacramento_font">How It Works</span>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-mobile-screen-button fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Download the app</h5>
                  <p className="card-text">
                    Click on the link and get on board our Fitmeals app
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
                  <h5 className="card-title">Book an appointment</h5>
                  <p className="card-text">
                    Our nutritionists will help find the right plan for you
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex  justify-content-center">
                  <i className="fa-solid fa-calculator fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Place an order</h5>
                  <p className="card-text">
                    Choose the plan the fits you well and place an order
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card text-center bg-transparent border-0">
                <div className="d-flex  justify-content-center">
                  <i className="fa-solid fa-check fs-1 rounded-circle p-2 icon_work icon"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Get started!</h5>
                  <p className="card-text">
                    Follow the diet and workout plans sent to you and begin your
                    journey.
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
export default Work;
