import React from 'react'

export default function Footer() {
    return (
        <>
        <div className="container-fluid footer position-relative bg-dark text-white-50 py-5 wow fadeIn" data-wow-delay="0.2s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-6 pe-lg-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="display-5 text-primary mb-0"><img src="./public/images/Rajbanni.png" alt="" /></h1>
        </a>
        {/* <p>Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed
          clita dolore eos dolores magna erat dolore sed stet justo et dolor.</p> */}
        <p className="mb-2"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-2" />+91-9974795558 </p>
        <p><i className="fa fa-envelope me-2" /> rajbannitextilehub@gmail.com</p>
        <div className="d-flex justify-content-start mt-4">
          {/* <a className="btn btn-sm-square btn-primary me-3" href="#"><i className="fab fa-twitter" /></a> */}
          <a className="btn btn-sm-square btn-primary me-3" href="https://www.facebook.com/rajbannitextilehub/"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-sm-square btn-primary me-3" href="https://www.youtube.com/@RajbanniTextilehub"><i className="bi bi-youtube" /></a>
          <a className="btn btn-sm-square btn-primary me-3" href="https://www.instagram.com/rajbannitextilehub/"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      <div className="col-lg-6 ps-lg-5">
        <div className="row g-4">
          <div className="col-sm-6">
            <h5 className="text-primary mb-4">Contact Number</h5>
            <a className="btn btn-link" href>+91-9974795558</a>
            <a className="btn btn-link" href>+91-9974805558</a>
            <a className="btn btn-link" href>+91-8347318171</a>
            <a className="btn btn-link" href>+91-7359318171</a>
            
            <a className="btn btn-link" href>+91-8511018558</a>
            
            <a className="btn btn-link" href>+91-8511028558</a>
          </div>
          
          {/* <div className="col-sm-12">
            <h5 className="text-primary mb-4">Newsletter</h5>
            <div className="position-relative w-100 mb-2">
              <input className="form-control bg-secondary border-0 w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: 60}} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-2 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
            </div>
            <p className="mb-0">Diam sed sed dolor stet amet eirmod</p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}