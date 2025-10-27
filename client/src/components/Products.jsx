
import React, { useState } from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  { id:1, category:'Saree', title:'Embroidered Silk Saree', price:'₹3,200', img:'https://images.pexels.com/photos/7752015/pexels-photo-7752015.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Luxurious silk saree with delicate embroidery.' },
  { id:2, category:'Lehenga Choli', title:'Traditional Lehenga Choli', price:'₹8,500', img:'https://images.pexels.com/photos/7214253/pexels-photo-7214253.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Richly detailed lehenga with matching choli and dupatta.' },
  { id:3, category:'Kurti', title:'Elegant Printed Kurti', price:'₹1,200', img:'https://images.pexels.com/photos/6962181/pexels-photo-6962181.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Comfortable everyday kurti with modern prints.' },
  { id:4, category:'Saree', title:'Banarasi Silk Saree', price:'₹6,400', img:'https://images.pexels.com/photos/7214250/pexels-photo-7214250.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Traditional Banarasi with gold zari.' },
  { id:5, category:'Lehenga Choli', title:'Pastel Lehenga', price:'₹7,200', img:'https://images.pexels.com/photos/7752016/pexels-photo-7752016.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Soft pastel lehenga, light embroidery.' },
  { id:6, category:'Kurti', title:'Anarkali Kurti', price:'₹1,800', img:'https://images.pexels.com/photos/6962179/pexels-photo-6962179.jpeg?auto=compress&cs=tinysrgb&w=800', desc:'Flowy Anarkali style kurti.' }
]

export default function Products() {
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const filtered = PRODUCTS.filter(p => (filter==='All'?true:p.category===filter)).filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products-head">
          <h2>Products</h2>
          <div className="products-controls">
            <select value={filter} onChange={e=>setFilter(e.target.value)}>
              <option>All</option>
              <option>Saree</option>
              <option>Lehenga Choli</option>
              <option>Kurti</option>
            </select>
            <input placeholder="Search products..." value={query} onChange={e=>setQuery(e.target.value)} />
          </div>
        </div>
        <div className="product-grid">
          {filtered.map(p=><ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
