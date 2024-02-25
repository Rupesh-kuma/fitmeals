import { Link } from "react-router-dom";

const Foots = () => {
    return (
        <>
        <div className="position-relative">
          <div className="footer-height">
                    <img src="./image/home/footer-bg.png" className="w-100" />
                </div>
                <div className="container position-absolute bottom-0 start-0 end-0 top-0 pt-3">
                    <div className=" row row-cols-1 row-cols-md-4 g-1">
                        <div className="col">
                        <div className="card bg-transparent border-0">
                            <img src="./image/home/logo-white.png" className="card-img-top w-50" alt="..." />
                            <div className="card-body text-light pt-4">
                                <p className="card-text lh-lg text-light">The Fitmeals culinary team consists of very passionate and skilled chefs. Our team is well versed in nutrition and all our menus and plans are designed by qualified nutrition experts.</p>
                            </div>
                            <div className="d-flex gap-4">
                                <i className="fa-brands fa-twitter p-3 rounded-circle footer_icon"></i><i        className="fa-brands fa-facebook-f p-3 rounded-circle footer_icon"></i><i class="fa-brands fa-instagram p-3 rounded-circle footer_icon"></i>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-light">
                                <h3 className="card-title header_color pb-5">Explore</h3>
                                <ul className="lh-lg">
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Home</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/meal_plans"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Meal plans</b></Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-light">
                                <h3 className="card-title header_color pb-5">Links</h3>
                                <ul className="lh-lg">
                                    <li className="list-group-item"> <Link className="nav-link active" aria-current="page" to="/about"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>About Us</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/blog"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Blog</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/faq"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>FAQ</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/testimonials"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Testimonials</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/refund"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Refund and Returns Policy</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/termscondition"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Terms and conditions</b></Link></li>
                                    <li className="list-group-item"><Link className="nav-link active" aria-current="page" to="/privacypolicy"><i class="fa-solid fa-angle-right header_color"></i> &nbsp;<b>Privacy Policy</b></Link></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="card bg-transparent border-0">
                            <div className="card-body text-light">
                                <h3 className="card-title header_color pb-5">Contact</h3>
                                <table className="table border-0">
                                    <tr className="header_color pb-3 nav-link border-0">
                                        <td className="border-0"><i class="fa-solid fa-phone-volume fs-5 bg-transparent header_color"></i></td>
                                        <td className="border-0">&nbsp;Call Us:</td>
                                    </tr>
                                    <tr className="nav-link ps-5">
                                        <td className="border-0"></td>
                                        <td className="border-0">9100347480</td>
                                    </tr>
                                    <tr className="nav-link ps-5">
                                        <td className="border-0"></td>
                                        <td className="border-0">9963697412</td>
                                    </tr>
                                    <tr className="header_color pb-3 nav-link">
                                        <td className="border-0"><i class="fa-solid fa-envelope fs-5 bg-transparent header_color"></i></td>
                                        <td className="border-0">&nbsp;Email Us:</td>
                                    </tr>
                                    <tr className="nav-link ps-5">
                                        <td className="border-0"></td>
                                        <td className="border-0">info@fitmeals.co.in</td>
                                    </tr>
                                    <tr className=" header_color pb-3 nav-link">
                                        <td className="border-0"><i class="fa-solid fa-location-dot fs-5 bg-transparent header_color"></i></td>
                                        <td className="border-0">&nbsp;Our Location</td>
                                    </tr>
                                    <tr className="nav-link ps-5">
                                        <td className="border-0"></td>
                                        <td className="border-0">Banjara Hills, Road no.5,</td>
                                    </tr>
                                    <tr className=" nav-link ps-5">
                                        <td className="border-0"></td>
                                        <td className="border-0">Hyderabad</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className="text-light d-flex justify-content-start bg-dark p-2">
                    <div className="d-flex justify-content-start container">
                        <p className="text-light">Copyright &copy; 2023. <span className="header_color">FitMeals</span>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Foots;