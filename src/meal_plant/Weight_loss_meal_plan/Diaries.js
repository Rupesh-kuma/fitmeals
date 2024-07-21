import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Diaries = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const slides = [
    { img: "../image/home/c-1.jpg", id: "#exampleModal", ids: "exampleModal" },
    { img: "./image/home/c-2.jpg", id: "#exampleModals", ids: "exampleModals" },
    { img: "./image/home/c-3.jpg", id: "#exampleModal3", ids: "exampleModal3" },
    { img: "./image/home/c-4.jpg", id: "#exampleModal4", ids: "exampleModal4" },
    { img: "./image/home/c-5.jpg", id: "#exampleModal5", ids: "exampleModal5" },
    { img: "./image/home/c-6.jpg", id: "#exampleModal6", ids: "exampleModal6" },
    { img: "./image/home/c-7.jpg", id: "#exampleModal7", ids: "exampleModal7" },
    { img: "./image/home/c-8.jpg", id: "#exampleModal8", ids: "exampleModal8" },
    { img: "./image/home/c-9.jpg", id: "#exampleModal9", ids: "exampleModal9" },
    { img: "./image/home/c-10.jpg", id: "#exampleModal10", ids: "exampleModal10" }
  ];

  return (
    <div className="container mt-5 py-5 diaries_p">
      <span className="d-flex justify-content-center fs-1 py-3 Sacramento_font text-dark">Weight-loss Diaries</span>
      <Slider {...settings}>
        {slides?.map((slide, index) => (
          <div key={index}>
             {/* modal */}
             <div class="modal " id={slide.ids} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img
                      src={slide.img}
                      className="carousel_widths w-100"
                      alt={`slide-${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target={slide.id}
              className="border-0 w-100"
            >
              <img
                src={slide.img}
                className="carousel_widths w-100"
                alt={`slide-${index + 1}`}
              />
            </button>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Diaries;
