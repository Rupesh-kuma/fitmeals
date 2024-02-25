const Header = () => {
  return (
    <>
      <div className="card  text-white banner header_imag">
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1">Weight Loss Meal Plan</h5>
        </div>
      </div>
      <div className="view_sample py-5">
        <div className="container ">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card bg-transparent border-0 pt-4">
                <div className="card-body lh-lg">
                  <p className="card-text">
                    If your aim is to lose weight in a gradual, healthy manner
                    then this diet would meet your requirements. The meals are
                    well balanced and consist of complex carbohydrates, lean
                    protein, healthy fats and generous portions of fruits and
                    vegetables which add all the essential vitamins, minerals
                    and fibre to your diet.
                  </p>
                  <p>
                    Disclaimer: This isn’t going to be any type of a crash diet
                    which will give you magical results; well aim for 2-4kgs per
                    month and all your meals will be designed by our
                    nutritionists who focus not only on seeing results but also
                    on ensuring that there’s no compromise on your mental and
                    physical health
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
                        className="rounded-circle"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        className="rounded-circle"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        className="rounded-circle"
                        aria-label="Slide 4"
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
                      <div className="carousel-item text-center">
                        <img
                          src="./image/meal_plant/maintenance.jpg"
                          className=" image-width"
                          alt="maintenance"
                        />
                      </div>
                      <div className="carousel-item text-center">
                        <img
                          src="./image/meal_plant/keto.jpg"
                          className=" image-width"
                          alt="keto"
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
export default Header;
