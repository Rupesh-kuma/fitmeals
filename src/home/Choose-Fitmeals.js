import React, { useEffect, useState } from "react";
import Meal from "./Meal_plan";

const Fitmeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const loadData = await fetch("/data/fitmeals_plan.json");
        const response = await loadData.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);
  return (
    <>
      <div id="fitmeals" className="position-relative choose-height">
        <div className="container ">
          <div className="lg-fitmeals_padding sm-p-1">
            <span
              className="text-center  d-block fs-1 Sacramento_font"
              style={{ color: "#8ec038" }}
            >
              Our benefits
            </span>
            <h1 className=" mt-2 home_h2 fw-bold text-center">So Why Choose Fitmeals?</h1>
            <p className="text-center  mx-4 pt-2">
              Fitmeals is not a diet system that promotes cleanses, pills,
              preserved foods or any kind of disordered eating habits. We’re all
              about wholesome & nourishing foods that make you feel the best
              version of yourself. .
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 row-cols-sm-2 row-cols-xs-2 g-4 mt-3">
            {data.map((item) => {
              return (
                <div className="col position-relative" key={`plan_${item.id}`}>
                  <div className=" text-center">
                    <i
                      className={`fa-solid fs-1 text-light p-4 icon ${item.icon}`}
                    ></i>
                    <div className="card-body mt-4">
                      <h5 className="card-title my-3">{item.title}</h5>
                      <p className="card-text lh-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <img
              src="./image/home/rotate.jpg"
              className="card-img-top rotate  mx-auto mt-4 "
              alt="rotate"
            />
          </div>
        </div>
        <Meal />
      </div>
      
    </>
  );
};
export default Fitmeals;
