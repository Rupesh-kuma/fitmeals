const Order = () => {
  return (
    <>
      <div className="card bg-dark text-white mt-5 bg-attechmet">
        
        <div className="card-img-overlay text-center top-50 position-relative">
        <div className="d-flex justify-content-evenly position-absolute bottom-auto end-0 start-0">
          <img src="./image/home/vizual.png"/>
          <img src="./image/home/vizual1.png"/>

        </div>
          <h1 className="card-title fss-1">Not convinced yet?</h1>
          <h1 className="card-title">
            Get our <span className="header_color">1 week trial plan</span>
          </h1>
          <button className="btn  btn-danger px-5 py-3 rounded-pill">order now</button>
        </div>
      </div>
    </>
  );
};
export default Order;
