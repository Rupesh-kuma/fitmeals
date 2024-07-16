const Banner = () => {
  return (
    <>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner banners_home">
            <div className="carousel-item active h-lg-100 h-sm-50">
              <img
                src="./image/home/SLIDE_01.jpg"
                className="d-block w-100 slidershows slidershow "
                alt="slide_01"
              />
              <div className="carousel-caption d-none d-md-block laper">
                <h2 className="banner-header">Who Says Eating Healthy is Boring?</h2>
              </div>
            </div>
            <div className="carousel-item h-lg-100 h-sm-50">
              <img
                src="./image/home/SLIDE_02.jpg"
                className="d-block w-100 h slidershows slidershow"
                alt="slide_02"
              />
              <div className="carousel-caption d-none d-md-block laper">
                <h2 className="banner-header">Meal Plan Subscriptions</h2>
                <p className="text-light">
                We’ve got different meal plans to cater to your specific requirements be it weight loss, staying healthy or building muscles.
                </p>
                <button className="btn view px-5 py-3 mt-4">view plan</button>
              </div>
            </div>
            <div className="carousel-item h-lg-100 h-sm-50">
              <img
                src="./image/home/SLIDE_03.jpg"
                className="d-block w-100 slidershows slidershow"
                alt="slide_03"
              />
              <div className="carousel-caption d-none d-md-block laper">
                <h2 className="banner-header">Get a Customised Diet Plan</h2>
                <p className="text-light">
                Consult our nutritionists and get a diet plan designed specifically for you.
                </p>
                <button className="btn checkout px-5 py-3 mt-4 me-2">Learn more</button>
                <button className="btn view px-5 py-3 mt-4 ms-2">view plan</button>
              </div>
            </div>
            <div className="carousel-item h-lg-100 h-sm-50">
              <img
                src="./image/home/slider-4.webp"
                className="d-block w-100 slidershows slidershow h-lg-100 h-sm-50"
                alt="slide_02"
              />
              <div className="carousel-caption d-none d-md-block laper">
                <h2 className="banner-header">Fitmeals app is now live!</h2>
                <p className="text-light">
                Get easy access to healthy recipes, workout plans, nutrition consultations and weekly menus.
                </p>
                <button className="btn view px-5 py-3 mt-4">view plan</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control  rounded-circle maris border py-3 px-3 fa-solid fa-arrow-left-long fs-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control rounded-circle maris fa-solid fa-arrow-right-long border p-3 fs-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
};
export default Banner;
