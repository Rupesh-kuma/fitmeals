const Blogtwo = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-5">
          <div className="col">
            <div className="col">
            <div className="card zoom">
              <div className="position-relative">
              <img
                src="./image/home/unnamed.jpg"
                className="card-img-top"
                alt="unnamed"
              />
              <button className="btn view rounded-pill w-50  position-absolute recent_marg">Uncategorized</button>
              </div>
              <div className="card-body p-5 lh-lg text-center" id="fitmeals">
                <h2 className="card-title h2_hover">
                  Fitmeals India Collaboration With Nestle a+ Grekyo
                </h2>
                <p className="card-text">
                  We’re excited to announce our collaboration with Nestle a+.
                  Now you can get a Nestle a+ Grekyo with every breakfast meal!
                  Wh …
                </p>
              </div>
              <div className="d-flex justify-content-around py-3 bg-light">
                  <div className="d-flex gap-2"><i class="fa-solid fa-calendar-days"></i><span className="align-top">June 16, 2021</span></div>
                  <div className="d-flex gap-2"><i class="fa-solid fa-comment-dots align-middle"></i><span className="align-text-top">0 comments</span></div>
              </div>
            </div>
            </div>
          </div>
          <div className="col">
          <div className="card zoom">
              <div className="position-relative">
              <img
                src="./image/home/mangoes.jpg"
                className="card-img-top"
                alt="mangoes"
              />
              <button className="btn view rounded-pill w-50  position-absolute  recent_marg">Nutrition</button>
              </div>
              <div className="card-body p-5 lh-lg text-center" id="fitmeals">
                <h2 className="card-title h2_hover">
                  5 reasons why you should eat mangoes- Myth busting Mondays
                </h2>
                <p className="card-text">
                  The mango season is nearing an end right now and if for any
                  reason you’ve avoided mangos like a plague then this article
                  is just f …
                </p>
              </div>
              <div className="d-flex justify-content-around py-3 bg-light">
                  <div className="d-flex gap-2"><i class="fa-solid fa-calendar-days"></i><span className="align-top">June 7, 2021</span></div>
                  <div className="d-flex gap-2"><i class="fa-solid fa-comment-dots align-middle"></i><span className="align-text-top">0 comments</span></div>
              </div>
            </div>
            <div className="card zoom mt-3">
              <div className="position-relative">
              <img
                src="./image/home/man.jpg"
                className="card-img-top"
                alt="man"
              />
              <button className="btn view rounded-pill w-50  position-absolute  recent_marg">Nutrition</button>
              </div>
              <div className="card-body p-5 lh-lg text-center" id="fitmeals">
                <h2 className="card-title h2_hover">A guide to clean bulking</h2>
                <p className="card-text">
                  Want to gain weight or build muscle? The only solution is to
                  eat surplus. Contrary to what most people think, it’s actually
                  very har …
                </p>
              </div>
              <div className="d-flex justify-content-around py-3 bg-light">
                  <div className="d-flex gap-2"><i class="fa-solid fa-calendar-days"></i><span className="align-top">May 28, 2021</span></div>
                  <div className="d-flex gap-2"><i class="fa-solid fa-comment-dots align-middle"></i><span className="align-text-top">0 comments</span></div>
              </div>
          </div>
          </div>
          <div className="col">
            <div className="text-center py-4">
              <input
                type="search"
                placeholder="Search"
                className="w-100 p-4 rounded-pill"
              />
            </div>
            <div className="card text-center p-5">
              <img
                src="./image/blog/38387CD2.jpg"
                className="card-img-top blog_img"
                alt="38387cd2"
              />
              <div className="card-body">
                <h5 className="card-title">Hafsaa</h5>
                <span className="hafsaa_color">Nutrition blogger</span>
                <p className="card-text">
                  Passionate about anything related to health and fitness and
                  loves to bust ridiculous diet myths using evidence based
                  explanations.
                </p>
              </div>
            </div>
            <h2 className="p-3 Categories">Categories</h2>
            <ul>
              <li className="list-group-item">Nutrition (2)</li>
              <li className="list-group-item">
                <hr />
              </li>
              <li className="list-group-item">Uncategorized (1)</li>
            </ul>
            <h2 className="p-3 Categories">Recent Posts</h2>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src="./image/home/unnamed.jpg"
                    className="img-fluid rounded-start rounded"
                    alt="unnamed"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title hafsaa_color fs-6">
                      Uncategorized
                    </h5>
                    <p className="card-text">
                      Fitmeals India Collaboration With Nestle a+ Grekyo June
                      16, 20210 comments
                    </p>
                    <div className="d-flex justify-content-between hafsaa_color">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2023-07-22"
                        min="2023-01-01"
                        max="2023-12-31"
                        className="border-0 hafsaa_color"
                      />
                      <i className="fa-regular fa-comment">
                        {" "}
                        <span> 0</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src="./image/home/mangoes.jpg"
                    className="img-fluid rounded-start rounded"
                    alt="mangoes"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title hafsaa_color fs-6">
                      Uncategorized
                    </h5>
                    <p className="card-text">
                      Fitmeals India Collaboration With Nestle a+ Grekyo June
                      16, 20210 comments
                    </p>
                    <div className="d-flex justify-content-between hafsaa_color">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2023-07-22"
                        min="2023-01-01"
                        max="2023-12-31"
                        className="border-0 hafsaa_color"
                      />
                      <i className="fa-regular fa-comment">
                        {" "}
                        <span> 0</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 bg-transparent border-0">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img
                    src="./image/home/man.jpg"
                    className="img-fluid rounded-start rounded"
                    alt="man"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title hafsaa_color fs-6">
                      Uncategorized
                    </h5>
                    <p className="card-text">
                      Fitmeals India Collaboration With Nestle a+ Grekyo June
                      16, 20210 comments
                    </p>
                    <div className="d-flex justify-content-between hafsaa_color">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2023-07-22"
                        min="2023-01-01"
                        max="2023-12-31"
                        className="border-0 hafsaa_color"
                      />
                      <i className="fa-regular fa-comment">
                        {" "}
                        <span> 0</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-danger px-1 rounded-pill view_more py-3 my-4">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogtwo;
