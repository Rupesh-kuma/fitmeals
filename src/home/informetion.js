const Informetion = () => {
  return (
    <>
      <div className=" informetion">
        <div className="container">
          <h1 className="text-center py-3 home_h2">
            Join our <span className="text-light">mailing list</span>
          </h1>
          <p className="lh-lg text-center py-4">
            Subscribe to our newsletter to stay up to date with our discounts,
            new products, recipes & nutrition tips.
          </p>
          <div className="d-flex justify-content-center widths_form mx-auto">
          <form className="d-flex text-center position-relative w-50">
            <input
              className="form-control w-100 px-5 py-3 rounded-pill "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-danger py-3 px-5 rounded-pill position-absolute mari"
              type="submit"
            >
              Search
            </button>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Informetion;
