
import React, { useState } from 'react'

export default function ProductCard({ product }) {
  const [open,setOpen]=useState(false)
  return (
    <div className="card">
      <img src={product.img} alt={product.title} />
      <div className="card-body">
        <div className="card-top">
          <h3>{product.title}</h3>
          <div className="price">{product.price}</div>
        </div>
        <p className="desc">{product.desc}</p>
        <div className="card-actions">
          <button className="btn btn-outline" onClick={()=>setOpen(true)}>Quick View</button>
          <a className="btn btn-primary" href={`mailto:demoemail@gmail.com?subject=Interested in ${encodeURIComponent(product.title)}`}>Enquire</a>
        </div>
      </div>
      {open && (
        <div className="modal">
          <div className="modal-inner">
            <button className="modal-close" onClick={()=>setOpen(false)}>Close</button>
            <div className="modal-grid">
              <img src={product.img} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.desc}</p>
                <a className="btn btn-primary" href={`mailto:demoemail@gmail.com?subject=Inquiry about ${encodeURIComponent(product.title)}`}>Enquire</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
