const Client = () => {
    return (
        <>
        <div className="container my-5 pb-4">
            <h2 className="text-center py-3 Sacramento_font fs-1 text-dark">Client Diaries</h2>
            <div id="carouselExampleCaptions" interval={500} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" className="border active mb-0" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" className="border" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" className="border" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" className="border" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" className="border" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">

                    <div className="row row-cols-1 row-cols-md-3 g-1">
  <div className="col">
    <div className="card">
    <img src="./image/home/c-1.jpg" className=" carousel_width w-100" alt="c-1" />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-2.jpg" className="carousel_width w-100" alt="c-2" />
      
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-3.jpg" className="carousel_width w-100" alt="c-3" />
     
    </div>
  </div>
</div>

                        
                         
                         
                    </div>
                    <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <img src="./image/home/c-4.jpg" className="carousel_width w-100" alt="c-4" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-5.jpg" className="carousel_width w-100" alt="c-5" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-6.jpg" className="carousel_width w-100" alt="c-6" />
    </div>
  </div>
</div>
                        
                    </div>
                    <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <img src="./image/home/c-6.jpg" className="carousel_width w-100" alt="c-7" />

    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-7.jpg" className="carousel_width w-100" alt="c-8" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-8.jpg" className="carousel_width w-100" alt="c-8" />
    </div>
  </div>
</div>
                    </div>
                    <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <img src="./image/home/c-8.jpg" className=" carousel_width w-100" alt="c-9" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-9.jpg" className="carousel_width w-100" alt="c-10" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-10.jpg" className="carousel_width w-100" alt="c-11" />
    </div>
  </div>
</div>
                        
                    </div>
                    <div className="carousel-item">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <img src="./image/home/c-11.jpg" className="carousel_width W-100" alt="c-12" />
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-12.jpg" className="carousel_width w-100" alt="c-13" />

    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="./image/home/c-13.jpg" className="carousel_width w-100" alt="c-14" />
    </div>
  </div>
</div>
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Client;