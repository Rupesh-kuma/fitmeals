const Transformationlook = () => {
  return (
    <>
      <div className="Transformationlook py-5">
        <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card bg-transparent border-0 pt-4">
                <div className="card-body lh-lg">
                  <p className="card-text">
                    The transformation programme is a transition between
                    different phases.
                  </p>
                  <ol>
                    <li>
                      The first phase is the balanced phase where all your meals
                      will be well balanced with proportioned macros
                    </li>
                    <li>
                      The second phase is the calorie deficit phase where
                      300-500 calories will be cut down according to your body
                      type
                    </li>
                    <li>
                      The final phase is the keto phase which would involve a
                      high fat, moderate protein and low carb diet.
                    </li>
                  </ol>
                  <p>
                    The plan will be personally curated for you and our
                    nutritionists will be available for consultation and support
                    whenever you need assistance.
                  </p>
                  <button className="btn btn-dangers">View Sample Menu</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 bg-transparent">
                <div className="card-body">
                  <span className="d-block text-center fs-1 Sacramento_font text-dark">
                    What our meals look
                    <br /> like:
                  </span>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active rounded-circle"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        classNameName="rounded-circle"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./image/meal_plant/dsc02724.jpg"
                          className="d-block image-width"
                          alt="dsc02724"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./image/meal_plant/dsc02782.jpg"
                          className="d-block image-width"
                          alt="dsc02782"
                        />
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
export default Transformationlook;
