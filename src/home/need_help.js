const Need=()=>{
    return(
        <>
        <div className="container">
            <div className="row pt-5 lh-lg">
                <div className="col-lg-5 p-5 col-sm-12">
                    <h2 className="pb-3 pt-4 header_color">Need Help?</h2>
                    <h2>Talk to our nutritionists!</h2>
                    <p>Don’t know where to start or  have any specific health conditions? Consult our experienced nutritionists and get your meals customised accordingly!</p>
                    <button className="btn btn-danger rounded-pill px-5 py-3">contact now</button>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className=" position-relative text-center p-5 col-8 ms-auto me-auto">
                    <img src="./image/home/note.jpg" className="rounded-circle need_rounded w-100" alt="note" />
                    <div className="position-absolute need_cover"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Need;