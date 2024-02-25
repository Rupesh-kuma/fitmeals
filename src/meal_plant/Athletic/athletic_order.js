const Athleticorder = () => {
    return (
      <>
         <div className="container athleticorder py-5">
        <span className="d-block text-center fs-1 Sacramento_font text-dark">Muscle Diaries</span>
        <div className="col-10 ms-auto me-auto">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-1.jpg"
                  className="carousel_widths w-100"
                  alt="..."
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-1.jpg"
                        className="carousel_widths w-100"
                        alt="c-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModals"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-2.jpg"
                  className="carousel_widths w-100"
                  alt="c-2"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModals"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-2.jpg"
                        className="carousel_widths w-100"
                        alt="c-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-3.jpg"
                  className="carousel_widths w-100"
                  alt="c-3"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal3"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-3.jpg"
                        className="carousel_widths w-100"
                        alt="c-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-4.jpg"
                  className="carousel_widths w-100"
                  alt="c=4"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal4"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-4.jpg"
                        className="carousel_widths w-100"
                        alt="c-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-5.jpg"
                  className="carousel_widths w-100"
                  alt="c-5"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal5"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-5.jpg"
                        className="carousel_widths w-100"
                        alt="c-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-6.jpg"
                  className="carousel_widths w-100"
                  alt="c-6"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal6"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-6.jpg"
                        className="carousel_widths w-100"
                        alt="c-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalh"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-6.jpg"
                  className="carousel_widths w-100"
                  alt="c-6"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModalh"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-6.jpg"
                        className="carousel_widths w-100"
                        alt="c-6"
                      />
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal7"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-7.jpg"
                  className="carousel_widths w-100"
                  alt="c-7"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal7"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-7.jpg"
                        className="carousel_widths w-100"
                        alt="c-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal8"
                className="border-0 w-100"
              >
                <img
                  src="./image/home/c-8.jpg"
                  className="carousel_widths w-100"
                  alt="c-8"
                />
              </button>
              <div
                className="modal fade"
                id="exampleModal8"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src="./image/home/c-8.jpg"
                        className="carousel_widths w-100"
                        alt="c-8"
                      />
                    </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
      </>
    );
  };
  export default Athleticorder;
  