import Foot from "../common/footer";

const Recent = () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center py-5">
          <span className="Sacramento_font fs-1">Food blog</span>
          <h2 className="home_h2">Recent articles</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card zoom">
              <div className="position-relative">
              <img
                src="./image/home/unnamed.jpg"
                className="card-img-top w-100"
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
          <div className="col ">
            <div className="card zoom">
              <div className="position-relative">
              <img
                src="./image/home/mangoes.jpg"
                className="card-img-top w-100"
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
          </div>
          <div className="col">
            <div className="card zoom">
              <div className="position-relative">
              <img
                src="./image/home/man.jpg"
                className="card-img-top w-100"
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
        </div>
        <div className="text-center py-5">
          <button className="btn btn-danger px-5 py-3 rounded-pill">Read more</button>
        </div>
      </div>
      <Foot />
    </>
  );
};
export default Recent;
