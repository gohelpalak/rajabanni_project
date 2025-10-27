
import React from 'react'

export default function Header() {
  return (
    <div>

      {/* Navbar Start */}
      <div className="container-fluid bg-light sticky-top p-0">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a href="#" class="navbar-brand  d-flex align-items-center justify-content-center px-3">
            <img src="/public/images/Rajbanni.png" alt="Rajbanni Logo" />
          </a>
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse p-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="#Hero" className="nav-item nav-link active">Home</a>
              <a href="#About" className="nav-item nav-link">About</a>
              <a href="#Pricing" className="nav-item nav-link">Products</a>
              <div className="nav-item dropdown">
                <a href="#Gallery" className="nav-link nav-item">Gallery</a>
              </div>
              <a href="#Contact" className="nav-item nav-link">Contact</a>
            </div>
            <div className="d-flex">

              <a className="btn btn-sm-square btn-primary me-3" href="https://www.facebook.com/rajbannitextilehub/"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-sm-square btn-primary me-3" href="https://www.youtube.com/@RajbanniTextilehub"><i className="bi bi-youtube" /></a>
              <a className="btn btn-sm-square btn-primary me-3" href="https://www.instagram.com/rajbannitextilehub/"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </div>


  )
}
