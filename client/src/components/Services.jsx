import React from 'react'

function Services() {
  return (
   <>
   <div className="container-fluid service py-5">
  <div className="container">
    <div className="text-center wow fadeIn" data-wow-delay="0.1s">
      <h1 className="font-dancing-script text-primary">Our Services</h1>
      <h1 className="mb-5">Explore Our Services</h1>
    </div>
    <div className="row g-4 g-md-0 text-center">
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 border-bottom border-end wow fadeIn" data-wow-delay="0.1s">
          <img className="img-fluid" src="img/haircut.png" alt />
          <h3 className="mb-3">Haircut</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 border-bottom border-lg-end wow fadeIn" data-wow-delay="0.3s">
          <img className="img-fluid" src="img/makeup.png" alt />
          <h3 className="mb-3">Makeup</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 border-bottom border-end border-lg-end-0 wow fadeIn" data-wow-delay="0.5s">
          <img className="img-fluid" src="img/manicure.png" alt />
          <h3 className="mb-3">Manicure</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase my-2" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 border-bottom border-lg-bottom-0 border-lg-end wow fadeIn" data-wow-delay="0.1s">
          <img className="img-fluid" src="img/pedicure.png" alt />
          <h3 className="mb-3">Pedicure</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 border-end wow fadeIn" data-wow-delay="0.3s">
          <img className="img-fluid" src="img/massage.png" alt />
          <h3 className="mb-3">Massage</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="service-item h-100 p-4 wow fadeIn" data-wow-delay="0.5s">
          <img className="img-fluid" src="img/skin-care.png" alt />
          <h3 className="mb-3">Skin Care</h3>
          <p className="mb-3">Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo
            et tempor eirmod magna dolore erat amet</p>
          <a className="btn btn-sm btn-primary text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Services