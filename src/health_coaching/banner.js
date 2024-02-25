const Banner=()=>{
    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" interval={500}>
    <div className="carousel-item active">
      <img src="./image/health/Creative-1.jpg" className="d-block w-100 img_height slidershow" alt="creative-1"/>
    </div>
    <div className="carousel-item ">
      <img src="./image/health/businesswoman-2.jpg" className="d-block w-100 img_height slidershow" alt="businesswoman-2"/>
      <div className="carousel-caption d-none d-md-block laper">
        <h2 className="banner-header">Your Personal Health Coach</h2>
        <p className="text-light">A Personal nutritionist assign you liet charts</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./image/health/woman-3.jpg" className="d-block w-100 img_height slidershow" alt="woman-3"/>
      <div className="carousel-caption d-none d-md-block laper">
        <h2 className="banner-header">wholesome healths Recipes</h2>
        <p className="text-light">Get access to quick and easy recipes and meal prep ideas</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./image/health/man-4.jpg" className="d-block w-100 img_height slidershow" alt="man-4"/>
      <div className="carousel-caption d-none d-md-block laper ">
        <h2 className="banner-header">Prasonalised workout plans</h2>
        <p className="text-light">workout routines designed according to your experrience level</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control rounded-circle maris border py-3 px-3 fa-solid fa-arrow-left-long fs-1" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control rounded-circle maris fa-solid fa-arrow-right-long border p-3 fs-1" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
        </>
    )
}
export default Banner;