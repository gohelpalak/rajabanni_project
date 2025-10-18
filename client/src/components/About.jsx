// import React from 'react'


// export default function About() {
// return (
// <section id="about" className="about">
// <div className="container">
// <h2>About Rajbanni</h2>
// <p>Rajbanni began with a love for traditional textiles and an eye for modern silhouettes. We combine craft and comfort to deliver pieces that celebrate femininity and heritage.</p>
// </div>
// </section>
// )
// }

import React from 'react'

export default function About() {
  return (
   <>
   <div id='About' className="container-fluid py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
        {/* <img className="img-fluid mb-3 h-60" src="/public/images/1.jpeg" alt /> */}
        <video className="img-fluid mb-3 h-60" controls  autoPlay muted loop playsInline>
          <source src="/public/images/Final-1.mp4" type="video/mp4"  />
        
        </video>
        <div className="d-flex align-items-center bg-light">
          <div className="btn-square flex-shrink-0 bg-primary" style={{width: 100, height: 100}}>
            <i className="fa fa-phone fa-2x text-dark" />
          </div>
          <div className="px-3">
            <h3>+91 9974895558</h3>
            <span>Call us 24/7 for saree styling guidance</span>
          </div>
        </div>
      </div>
       <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="font-dancing-script text-primary">About Us</h1>
              <h1 className="mb-5">Why People Choose Us!</h1>
              <p className="mb-4">
                At <b>Rajbanni</b>, we don’t just design sarees—we preserve the timeless heritage of Indian craftsmanship. 
                Our sarees reflect a graceful blend of traditional artistry and modern elegance. Every piece we create 
                carries a story of culture, dedication, and beauty. <br /><br />
                We work closely with skilled artisans across India to bring you authentic handloom, silk, and designer sarees 
                that offer unmatched quality and charm. Customer satisfaction and trust are at the heart of our work.
                <br /><br />
                <b>Elegance. Tradition. Trust. – That’s Rajbanni.</b>
              </p>
        <div className="row g-3 mb-5">
          <div className="col-sm-6">
            <div className="bg-light text-center p-4">
              <i className="fas fa-calendar-alt fa-4x text-primary" />
              <h1 className="display-5" data-toggle="counter-up">25</h1>
              <p className="text-dark text-uppercase mb-0">Years experience</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="bg-light text-center p-4">
              <i className="fas fa-users fa-4x text-primary" />
              <h1 className="display-5" data-toggle="counter-up">999</h1>
              <p className="text-dark text-uppercase mb-0">Happy Customers</p>
            </div>
          </div>
        </div>
        <a className="btn btn-primary text-uppercase px-5 py-3" href>Read More</a>
      </div>
    </div>
  </div>
</div>

   </>
  )
}
