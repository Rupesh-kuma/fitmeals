const Appointment = () => {
    return (
        <>
        <div id="fitmeals">
            <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col pt-4">
                    <div className="card border-0 bg-transparent">
                            <div className="card-body lh-lg">
                                <h2 className="card-title fs-1 ">Book an appointment with</h2>
                                <h2 className="card-title py-2 fs-1">your <span className="header_color">personal nutritionist</span></h2>
                                <p className="card-text mb-5">Book a consultation session on the app with one of our nutritionists to discuss your health concerns and goals.</p>
                                <p className=" d-flex al_item pt-3"><i className="fa-solid fa-clock fs-3 header_color"></i>&nbsp; <b>Every day from 12:00 PM to 10:00 PM</b></p>
                                <p className=" d-flex al_item"><i className="fa-solid fa-phone-volume fs-3 header_color"></i>&nbsp;<b> +91 9100347489</b></p>
                            </div>
                    </div>
                </div>
                <div className="col pt-5">
                    <div className="appointment_img">
                        <img src="./image/health/businesswoman-2.jpg" className="card-img-top appointment_img" alt="businesswoman"/>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Appointment;