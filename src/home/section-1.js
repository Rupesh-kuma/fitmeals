const Sec_01 = () => {
    return (
        <>
            <div className="container pt-5 pb-5 ">
                <div className="row border-0 mt-5">
                    <div className="col-lg-6 col-sm-12  lh-lg border-0 mt-4">
                        <div className="card-body">
                            <h2 className="card-title lg-lh-lg sm-lh-sm home_h2 lg-fs-1 sm-fs-0">It's not just food,</h2>
                            <h2 className="card-title fs-1" style={{ color: '#8ec038' }}>It's a lifestyle!</h2>
                            <p className="card-text pe-5">We break the stereotype ‘healthy eating is boring”. Reach your weight, health and workout goals with deliciously healthy food. We have various diet plans customised to suit your specific health and weight requirements. With a new changing menu every week, we bring to you food from various cuisines, with a healthy twist. We make healthy eating fun and effortless!</p>
                            <button className="btn btn-dark rounded-pill mt-4 btn-lg px-5 py-3">Read More</button>
                        </div>

                    </div>
                    <div className="col-lg-2  col-sm-12  border-0">
                        <img src="./image/home/bacon-.jpg" className="card-img-top" alt="bacon" />
                    </div>
                    <div className="col-lg-4 col-sm-12  border-0">
                        <div className="card-body">
                            <ul className="lh-lg p-0">
                                <li className="py-3 list-group-item  d-flex"><i className="fa-solid fa-check fs-1 section_i"></i><p className="align-top">Custom tailored diet plans.</p></li>
                                <li className="py-3 list-group-item  d-flex"><i className="fa-solid fa-check fs-1 section_i"></i><p className="align-top">Free from refined sugars & trans fats.</p></li>
                                <li className="py-3 list-group-item  d-flex"><i className="fa-solid fa-check fs-1 section_i"></i><p className="align-top">Different menu every day.</p></li>
                                <li className="py-3 list-group-item  d-flex"><i className="fa-solid fa-check fs-1 section_i"></i><p className="align-top">Flexibility of plans</p></li>
                                <li className="py-3 list-group-item  d-flex"><i className="fa-solid fa-check fs-1 section_i"></i><p className="align-top">Ongoing nutritionist support.</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sec_01;