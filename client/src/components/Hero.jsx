import React from 'react'

export default function Hero() {
  return (
     <>
    <div>
  <div class="container-fluid p-0 hero-header bg-light mb-5" id='Hero'>
  <div className="container p-0">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 hero-header-text py-5">
        <div className="py-5 px-3 ps-lg-0">
          <h1 className="font-dancing-script text-primary animated slideInLeft">Welcome</h1>
          <h1 className="display-1 mb-4 animated slideInLeft">Beauty  Fashion for Women</h1>
          <div className="row g-4 animated slideInLeft">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-square btn btn-primary flex-shrink-0">
                  <i className="fa fa-phone text-dark" />
                </div>
                <div className="px-3">
                  <h5 className="text-primary mb-0">Call Us</h5>
                  <p className="fs-5 text-dark mb-0">+91 9974895558</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-square btn btn-primary flex-shrink-0">
                  <i className="fa fa-envelope text-dark" />
                </div>
                <div className="px-3">
                  <h5 className="text-primary mb-0">Mail Us</h5>
                  <p className="fs-5 text-dark mb-0">rajbannitextilehub@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="owl-carousel header-carousel animated fadeIn" >
          <img className="img-class" src="/public/images/HeroImg.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}
