const Clients=()=>{
    return(
        <>
        <div>
            <img src="./image/home/line.jpg" className="w-100"/>
        </div>
        <div id="fitmeals">
        <div className="container">
            <div className="text-center pt-5">
                <h2 className="Sacramento_font fs-1">Testimonials</h2>
                <h2 className="mt-2 home_h2 fw-bold text-center">What our clients say</h2>
            </div>
            <div id="carouselExampleCaption" className="carousel slide col-8 client_padding" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active text-center pt-5 lh-lg ">
                    <i className="fa-solid fa-quote-right fs-1 header_color"></i>
                    <p>The perfect combination of healthy and delicious food. Fitmeals made sure that I reach my fitness and weight goals with frequent follow up calls from the nutritionist who made sure to always check on the progress. Excellent service, really happy with the results .</p>
                    <img src="./image/home/sanjana.png" className=" rounded-circle" alt="sanjana" />
                    <h4>Sanjana Devulapally</h4>
                    </div>
                    <div className="carousel-item text-center pt-5 lh-lg ">
                    <i className="fa-solid fa-quote-right fs-1 header_color"></i>
                    <p>Absolutely delicious, healthy and freshly prepared food. For sure makes me feel lighter I look forward to having Fitmeals every day.</p>
                        <img src="./image/home/divya.png" className="rounded-circle" alt="divya" />
                        <h2>Divya</h2>
                    </div> 
                </div>
                <div className="d-lg-flex justify-content-between d-none">
                <button className="carousel-control-prev carousel_left" type="button" data-bs-target="#carouselExampleCaption" data-bs-slide="prev">
                    <span className="carousel fa-solid fa-arrow-left fs-1 rounded-circle py-3 px-3 text-dark border border-secondary mari" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next  carousel_right " type="button" data-bs-target="#carouselExampleCaption" data-bs-slide="next">
                    <span className="carousel-control fa-solid fa-arrow-right fs-1 text-dark rounded-circle border border-secondary py-3 px-3 mari" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
            <img src="./image/home/testimonials-bg.png" className="w-100" alt="testimonials"/>
        </div>
        </>
    )
}
export default Clients;