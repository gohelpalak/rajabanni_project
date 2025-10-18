import React from 'react'

function Gallery() {
  return (
    <div id='Gallery' className="container-fluid gallery py-5">
  <div className="container">
    <div className="text-center wow fadeIn" data-wow-delay="0.2s">
      <h1 className="font-dancing-script text-primary">Gallery</h1>
      <h1 className="mb-5">Explore Our Gallery</h1>
    </div>
    <div className="row g-0" style={{height:'1003px'}}>
      <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
        <div className="gallery-item h-100">
          <img src="/public/images/Gallery_1.jpg" className="img-fluid img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_1.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-1"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
        <div className="gallery-item h-100">
          <img src="/public/images/Gallery_2.jpg" className="img-fluid img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_2.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-2"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3 wow fadeIn" data-wow-delay="0.6s">
        <div className="gallery-item h-100">
          <img src="/public/images/Gallery_3.png" className="img-fluid img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_3.png" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-3"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3 wow fadeIn" data-wow-delay="0.2s">
        <div className="gallery-item h-50">
          <img src="/public/images/Gallery_7.jpg" className="img-fluid img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_7.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-4"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-3 wow fadeIn" data-wow-delay="0.4s">
        <div className="gallery-item h-50">
          <img src="/public/images/Gallery_9.jpg" className="img-fluid img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_9.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-5"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
      <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
        <div className="gallery-item h-50">
          <img src="/public/images/Gallery_11.jpg" className="object-fit: contain img-pricing w-100 h-100" alt />
          <div className="gallery-icon">
            <a href="/public/images/Gallery_11.jpg" className="btn btn-primary btn-lg-square" data-lightbox="Gallery-6"><i className="fa fa-eye" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Gallery