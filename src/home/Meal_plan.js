import { useState } from "react";

const Meal = () => {
    const [activeSection, setActiveSection] = useState("weight");

    const handleButtonClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <>
            <div id="meals" className="position-absolute meals_top start-0 end-0">
                <div className="container bg-light my-5 p-4 box_shadow left_img position-relative">
                    
                    <div className="pt-5">
                        <div className="card-body text-center">
                            <span className=" Sacramento_font">Hungry yet?</span>
                            <h1 className="home_h2 my-3 pb-3">Choose your Meal Plan</h1>
                        </div>
                    </div>


                    <div className="d-flex justify-content-around mt-4" role="group" >
                        <button onClick={() => handleButtonClick("weight")}   className={`btn rounded-pill btns ${activeSection === "weight" ? 'active' : ''}`} data-bs-toggle="collapse"  role="button" aria-expanded="true" aria-controls="weight">
                            Weight Loss Meal Plan
                        </button>
                        <button onClick={() => handleButtonClick("athletic")} className={`btn rounded-pill btns ${activeSection === "athletic" ? 'active' : ''}`} data-bs-toggle="collapse" href="#athletic" role="button" aria-expanded="false" aria-controls="athletic">
                            Athletic Meal Plan
                        </button>
                        <button onClick={() => handleButtonClick("maintenance")}  className={`btn rounded-pill btns ${activeSection === "maintenance" ? 'active' : ''}`} data-bs-toggle="collapse" href="#maintenance" role="button" aria-expanded="false" aria-controls="maintenance">
                            Maintenance Meal Plan
                        </button>
                        <button onClick={() => handleButtonClick("keto")}  className={`btn rounded-pill btns ${activeSection === "keto" ? 'active' : ''}`} data-bs-toggle="collapse" href="#keto" role="button" aria-expanded="false" aria-controls="keto">
                            Keto Meal Plan
                        </button>
                    </div>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>

                    {activeSection === "weight" && (
                    // <div className="collapse" id="weight">
                        <div className="mb-3 pt-5 d-flex justify-content-around">
                            <div className="row g-4 ">
                                <div className="col-md-4">
                                    <img src="./image/home/weight.jpg" className="img-fluid rounded-start" alt="weight" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body lh-lg">
                                        <h2 className="card-title">Weight Loss Meal Plan</h2>
                                        <h5 className="card-title">1200-1400 kcal</h5>
                                        <p className="card-text">If your aim is to lose weight in a gradual, healthy manner then this diet would meet your requirements. The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</p>
                                        <button className="btn btn-danger rounded-pill px-5 py-3 btn-lg">view plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    // </div>
                     )}
                      {activeSection === "athletic" && (
                    // <div className="collapse" id="athletic">
                        <div className="mb-3 pt-5 d-flex justify-content-around">
                            <div className="row g-4 ">
                                <div className="col-md-4">
                                    <img src="./image/home/maintenance.jpg" className="img-fluid rounded-start" alt="maintenance" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body lh-lg">
                                        <h2 className="card-title">Athletic Meal Plan</h2>
                                        <h5 className="card-title">1400-1800kcal</h5>
                                        <p className="card-text">A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered.</p>
                                        <button className="btn btn-danger rounded-pill px-5 py-3 btn-lg">view plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    // </div>
                     )}
                    {activeSection === "maintenance" && (
                    // <div className="collapse" id="maintenance">
                        <div className="mb-3 pt-5 d-flex justify-content-around">
                            <div className="row g-4 ">
                                <div className="col-md-4">
                                    <img src="./image/home/athletic.jpg" className="img-fluid rounded-start" alt="athletic" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body lh-lg">
                                        <h2 className="card-title">Maintenance Meal Plan</h2>
                                        <h5 className="card-title">1400-1600</h5>
                                        <p className="card-text">This plan is for individuals looking for meals that will help in weight maintenance. All the meals have moderately portioned macros and micros.</p>
                                        <button className="btn btn-danger rounded-pill px-5 py-3 btn-lg">view plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    // </div>
                     )}
                     {activeSection === "keto" && (
                    // <div className="collapse" id="keto">
                        <div className="mb-3 pt-5 d-flex justify-content-around">
                            <div className="row g-4 ">
                                <div className="col-md-4">
                                    <img src="./image/home/keto.jpg" className="img-fluid rounded-start" alt="keto" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body lh-lg">
                                        <h2 className="card-title">Keto Meal Plan</h2>
                                        <h5 className="card-title">1300-1500kcal</h5>
                                        <p className="card-text">The keto diet is all about eating meals that are high in fat, consist moderate portions of protein and very low in carbs. The reduction of carbohydrates results in a metabolic process called ketosis where your body fat is then used to generate energy in the body.</p>
                                        <button className="btn btn-danger rounded-pill px-5 py-3 btn-lg">view plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    // </div>
                    )}
                </div>
                <div className="d-flex justify-content-between position-absolute top-0 nutrion_img end-0 botton-0 gap-5">
                    <div className=""><img src="../image/home/nutrion-left.png" /></div>
                    <div><img src="../image/home/nutrion-right.png" /></div>
                </div>
            </div>
        </>
    )
}
export default Meal;