const Sec_01 = () => {
    return (
        <>
        <div className="container pt-5 pb-5 ">
            <div className="d-flex border-0 mt-5">
                <div className="col-6  lh-lg border-0 ">
                        <div className="card-body">
                            <h2 className="card-title lh-lg home_h2 fs-1">It's not just food,</h2>
                            <h2 className="card-title fs-1"  style={{color: '#8ec038'}}>It's a lifestyle!</h2>
                            <p className="card-text pe-5">We break the stereotype ‘healthy eating is boring”. Reach your weight, health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines, with a healthy twist. We make healthy eating fun and effortless!</p>
                            <button className="btn btn-dark rounded-pill mt-4 btn-lg px-5 py-3">Read More</button>
                        </div>
                       
                </div>
                <div className="col-2 w-25  border-0">
                    <img src="./image/home/bacon-.jpg" className="card-img-top" alt="bacon"/>
                </div>
                <div className="col-4 w-30 border-0">
                        <div className="card-body">
                        <ul className="lh-lg">
                            <li className="py-3 list-group-item"><i className="fa-solid fa-check fs-1 section_i"></i><span className="align-top">Custom tailored diet plans.</span></li>
                            <li className="py-3 list-group-item"><i className="fa-solid fa-check fs-1 section_i"></i><span className="align-top">Free from refined sugars & trans fats.</span></li>
                            <li className="py-3 list-group-item"><i className="fa-solid fa-check fs-1 section_i"></i><span className="align-top">Different menu every day.</span></li>
                            <li className="py-3 list-group-item"><i className="fa-solid fa-check fs-1 section_i"></i><span className="align-top">Flexibility of plans</span></li>
                            <li className="py-3 list-group-item"><i className="fa-solid fa-check fs-1 section_i"></i><span className="align-top">Ongoing nutritionist support.</span></li>
                        </ul>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Sec_01;