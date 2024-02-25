const Test = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 py-5 my-5">
          <div className="col">
            <div className="card text-center test-padding">
              <i className="fa-solid fa-quote-right fs-1 mission_color"></i>
              <div className="card-body text-center">
                <p className="card-text">
                  The perfect combination of healthy and delicious food.
                  Fitmeals made sure that I reach my fitness and weight goals
                  with frequent follow up calls from the nutritionist who made
                  sure to always check on the progress. Excellent service,
                  really happy with the results .
                </p>
                <div className="pt-3">
                  <img
                    src="./image/home/sanjana.png"
                    className="rounded-circle img_icon"
                    alt="sanjana"
                  />
                  <h3 className="fs-6 pt-3">Sanjana Devulapally</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center test-padding">
              <i className="fa-solid fa-quote-right fs-1 mission_color"></i>
              <div className="card-body text-center">
                <p className="card-text">
                  Absolutely delicious, healthy and freshly prepared food. For
                  sure makes me feel lighter I look forward to having Fitmeals
                  every day.
                </p>
                <div className="pt-3">
                  <img
                    src="./image/home/divya.png"
                    alt="divya"
                    className="rounded-circle img_icon"
                  />
                  <h3 className="fs-6 pt-3">Divya</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;
