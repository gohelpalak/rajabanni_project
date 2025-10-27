
import React from 'react'

const REVIEWS=[
  {id:1,name:'Meera',text:'Beautiful quality and fast delivery. Loved my saree!'},
  {id:2,name:'Rina',text:'Lehenga fit was perfect, so many compliments.'},
  {id:3,name:'Sonal',text:'Kurti fabric is so soft and the print is lovely.'}
]

export default function Reviews(){
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center wow fadeIn" data-wow-delay="0.2s">
            <h1 className="font-dancing-script text-primary">Testimonial</h1>
            <h1 className="mb-5">What Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3" />
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum et lorem et sit.</p>
              <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-1.jpg" alt />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3" />
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum et lorem et sit.</p>
              <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-2.jpg" alt />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3" />
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum et lorem et sit.</p>
              <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-3.jpg" alt />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
            <div className="text-center bg-light p-4">
              <i className="fa fa-quote-left fa-3x mb-3" />
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat
                ipsum et lorem et sit.</p>
              <img className="img-fluid mx-auto border p-1 mb-3" src="img/testimonial-4.jpg" alt />
              <h4 className="mb-1">Client Name</h4>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
