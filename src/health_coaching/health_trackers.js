import React from 'react';
const Track = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card border-0 pt-5">
              <img
                src="./image/health/phone.jpg"
                className="card-img-top health_marings"
                alt="phone"
              />
            </div>
          </div>
          <div className="col">
            <div className="card border-0">
              <div className="card-body">
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
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="./image/health/appstore-asset-2.jpg"
                        className="d-block w-100"
                        alt="appstore-asset-2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./image/health/appstore-asset-3.jpg"
                        className="d-block w-100"
                        alt="appstore-asset-3"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="./image/health/appstore-asset-6.jpg"
                        className="d-block w-100"
                        alt="appstore-asset"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-4 mt-5">
            <img src="./image/health/ICON-3.png" alt="icon-3" />
        </div>
        <div className="d-flex justify-content-center py-4">
            <img src="./image/health/ICON-7.png" alt="icon-7" className="w-100" />
        </div>
      </div>
    </>
  );
};
export default Track;
