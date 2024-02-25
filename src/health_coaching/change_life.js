const Life = () => {
  return (
    <>
      <div className="container">
        <div className="text-center py-5">
          <span className="Sacramento_font fs-1">Our services</span>
          <h1 className="fs-1">Let's change your life</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col">
            <div className="card text-center p-4 border-0">
              <div className="rounded-circle p-3 life_img">
                <img
                  src="./image/health/food.jpg"
                  className="card-img-top rounded-circle"
                  alt="food"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title py-2">Nutrition Programs</h3>
                <p className="card-text lh-lg">
                  Diet charts designed to help you reach your goals in a
                  sustainable manner without using any crash diet approach.
                </p>
                <button className="btn btn-danger rounded-pill px-4">Read more</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center p-4 border-0">
              <div className="rounded-circle p-3 life_img">
                <img
                  src="./image/health/adult.jpg"
                  className="card-img-top rounded-circle"
                  alt="adult"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title py-2">Workout Programs</h3>
                <p className="card-text lh-lg">
                  Easy workout routines designed according to your fitness
                  levels with constant motivation to push yourself.
                </p>
                <button className="btn btn-danger rounded-pill px-4">Read more</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center p-4 border-0">
              <div className="rounded-circle p-3 life_img">
                <img
                  src="./image/health/doctor.jpg"
                  className="card-img-top rounded-circle"
                  alt="doctor"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title py-2">Health Counselling</h2>
                <p className="card-text lh-lg">
                  30 minute consultations with any of our nutritionists every
                  week to discuss your progress and problems.
                </p>
                <button className="btn btn-danger rounded-pill px-4">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Life;
