import React from 'react'

function Pricing() {
  return (
   <>
   <div id='Pricing' className="container-fluid price px-0 py-5">
  <div className="row g-0">
    <div className="col-md-6">
      <div className="d-flex align-items-center h-100 bg-primary p-5">
        <div className="wow fadeIn" data-wow-delay="0.3s">
          <h1 className="font-dancing-script text-white">Our Latest Saree Collection</h1>
          <p>At Rajbanni, we bring you a premium collection of handpicked sarees crafted with love, grace, and tradition. Whether you’re looking for bridal elegance, festive glamour, or a timeless classic – we have something perfect for every occasion.</p>
          {/* <h1 className="mb-0">Beauty Salon</h1> */}
          {/* <h1 className="display-1 text-uppercase mb-5" style={{letterSpacing: 10}}>Pricing</h1> */}
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="text-center bg-dark p-5">
                <h4 className="text-white">Enjoy</h4>
                <h1 className="display-1 font-work-sans text-white">15% OF</h1>
                <p className="fs-2 text-white mb-0">On Your First Purchase</p>
              </div>
            </div>
            <div className="col-lg-6">
              <p>Limited time offer. Premium quality guaranteed.</p>
              {/* <a class="btn btn-dark" href="#">Shop Now</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="h-100 bg-dark p-5">
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.1s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_14.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Kanjivaram Silk Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$49</h3> */}
            <p className="text-white">Rich heritage weave, crafted with pure zari detailing.</p>
          </div>
        </div>
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.2s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_6.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Banarasi Silk Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$79</h3> */}
            <p className="text-white">Handwoven royal elegance straight from Varanasi.</p>
         
          </div>
        </div>
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.3s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_7.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Paithani Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$59</h3> */}
              <p className="text-white">Timeless Maharashtrian beauty with peacock design.</p>
         
          </div>
        </div>
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.4s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_15.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Patola Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$49</h3> */}
               <p className="text-white">Traditional double-ikat masterpiece from Gujarat.</p>
         
          </div>
        </div>
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.5s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_16.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Bridal Designer Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$39</h3> */}
               <p className="text-white">Perfect for weddings – luxury meets tradition</p>
         
          </div>
        </div>
        <div className="price-item mb-3 wow fadeIn" data-wow-delay="0.6s">
          <img className="img-pricing flex-shrink-0" src="/public/images/Gallery_17.jpg" alt />
          <div className="text-end px-4">
            <h6 className="text-uppercase text-primary">Soft Organza Saree</h6>
            {/* <h3 className="text-white font-work-sans mb-0">$99</h3> */}
               <p className="text-white">Lightweight elegance for festive occasions.</p>
         
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Pricing